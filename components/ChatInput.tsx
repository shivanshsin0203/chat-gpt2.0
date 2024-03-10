"use client"
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react"

type props={
    chatId:string
}
const ChatInput = ({chatId}:props) => {
    const model="davinci";
    const [prompt,setPrompt]=useState('');
    const {data:session}=useSession();
    const sendMessage=async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       if(!prompt)return;
       setPrompt('');
       const input =prompt.trim();
       const message:Message={
        text:input,
        createdAt:serverTimestamp(),
        user:{
            _id:session?.user?.email!,
            name:session?.user?.name!,
            avatar:session?.user?.image! || `https://ui-avatar.com/api/name=${session?.user?.name!}`
        }
       }
       await addDoc(collection(db,"users",session?.user?.email!,"chats",chatId,"messages"),message);
       await fetch('/api/askQuestion',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({prompt:input,chatId,model,session})
       }).then(()=>{
        // Toast notification
       })
    }
  return (
    <div className=" bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form onSubmit={sendMessage} className=" p-5 space-x-5 flex">
         <input className=" bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e)=>{setPrompt(e.target.value)}}
          type="text"
          placeholder="Type your Message here.....">
         </input>
         <button className=" bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-slate-300 disabled:cursor-not-allowed"
            disabled={!session||!prompt}
            type="submit"
         >
            <PaperAirplaneIcon className=" h-4 w-4 -rotate-45"/>
         </button>
        </form>
    </div>
  )
}

export default ChatInput