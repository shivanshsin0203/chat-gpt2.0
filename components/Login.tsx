'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
const Login = () => {
  return (
    <div className=" bg-[#11A37F] flex flex-col items-center justify-center h-screen text-center">
        <Image
        src={'https://links.papareact.com/2i6'}
        width={300}
        height={300}
        alt="logo"
         />
         <button onClick={()=>signIn('google')} className=" text-white font-bold text-3xl animate-pulse cursor-pointer">Sign In to ChatGpt</button>
    </div>
  )
}

export default Login