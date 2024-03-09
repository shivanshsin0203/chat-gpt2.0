import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
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
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ?(
            <Login/>
          ):(
          <div className=" flex">
            <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <Sidebar />
            </div>

            <div className=" flex-1 bg-[#343541]">{children}</div>
          </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
