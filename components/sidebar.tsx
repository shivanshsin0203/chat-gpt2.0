'use client'
import { useSession,signOut } from "next-auth/react"
import NewChat from "./NewChat"
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"
import ChatRow from "./ChatRow"
const Sidebar = () => {
    const {data:session}=useSession()
    const [chats,loading,error]=useCollection(session && query( collection(db,"users",session?.user?.email!,"chats"),orderBy("createdAt","asc")));
    console.log(chats)
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
                {chats?.docs.map(chat=>(
                    <ChatRow key={chat.id} id={chat.id}/>
                ))}
            </div>
        </div>
        {session && <img onClick={()=>signOut()} src={session.user?.image!} alt="user" className=" w-12 h-12 rounded-full cursor-pointer hover:opacity-50 mx-auto mb-2 " />}
        </div>
  )
}

export default Sidebar