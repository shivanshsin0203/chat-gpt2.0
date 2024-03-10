import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"
type props={
    params:{
        id:string
    
    }
}
const ChatPage = ({params:{id}}:props) => {
  return (
    <div className=" flex flex-col h-screen overflow-hidden">
      <Chat chatId={id}/>
      <ChatInput chatId={id}/>
      </div>
  )
}

export default ChatPage