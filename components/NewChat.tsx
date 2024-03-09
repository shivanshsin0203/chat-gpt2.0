'use client'
import { db } from "@/firebase";
import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

const NewChat = () => {
  const router= useRouter();
  const {data:session}=useSession()
  const createNewChat= async()=>{
    if (session?.user?.email) {
      const doc= await addDoc(collection(db,"users",session.user.email,"chats"),{
           userId:session?.user?.email,
           createdAt: serverTimestamp(),
    })
    router.push(`/chat/${doc.id}`)
    }
  }
  return (
    <div onClick={createNewChat} className=" chatrow border-gray-700 border">
      <PlusIcon className=" w-8 h-8 "/>
      <p>New Chat</p>
    </div>
  )
}

export default NewChat