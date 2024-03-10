"use client"
import { db } from "@/firebase"
import { ChatBubbleLeftEllipsisIcon, TrashIcon } from "@heroicons/react/24/outline"
import { collection, deleteDoc, doc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
type Props = {
    id: string
    }

const ChatRow = ({id}:Props) => {
    const pathname=usePathname();
    const router=useRouter();
    const {data:session}=useSession();
    const [active, setActive]=useState(false);
    const [messages]=useCollection(session && collection(db,"users",session?.user?.email!,"chats",id,"messages"))
    useEffect(()=>{
        if(!pathname)return;
        setActive(pathname.includes(id));
    },[pathname])
    const deleteChat=async()=>{
        await deleteDoc(doc(db,"users",session?.user?.email!,"chats",id));
        router.replace('/');
    }
  return (
    <Link href={`/chat/${id}`} className={`chatrow justify-center ${active && "bg-gray-700/50"}`}>
        <ChatBubbleLeftEllipsisIcon className="h-5 w-5"/>
        <p className=" flex-1 hidden md:inline-flex truncate">{
            messages?.docs[messages?.docs.length-1]?.data().text ||'New Chat'
        }</p>
        <TrashIcon onClick={deleteChat} className="h-5 w-5 text-gray-700 hover:text-red-700"/>
    </Link>
  )
}

export default ChatRow