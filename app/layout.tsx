import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGpt",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head><link rel="icon" href="/gpt.ico" sizes="any" /></head>
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ?(
            <Login/>
          ):(
          <div className=" flex">
            <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />
            </div>
              <ClientProvider/>
            <div className=" flex-1 bg-[#343541]">{children}</div>
          </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
