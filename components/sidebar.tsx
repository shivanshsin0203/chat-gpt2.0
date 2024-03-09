'use client'
import { useSession,signOut } from "next-auth/react"
import NewChat from "./NewChat"

const Sidebar = () => {
    const {data:session}=useSession()
  return (
    <div className=" p-2 flex flex-col h-screen ">
        <div className=" flex-1">
            <div>
            <NewChat/>
            </div>
            <div>
                {/* Models */}
            </div>
            <div>
                {/* Chat Rows */}
            </div>
        </div>
        {session && <img onClick={()=>signOut()} src={session.user?.image!} alt="user" className=" w-12 h-12 rounded-full cursor-pointer hover:opacity-50 mx-auto mb-2 " />}
        </div>
  )
}

export default Sidebar