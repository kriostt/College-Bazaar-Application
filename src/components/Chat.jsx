import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
function Chat() {
  const {data} = useContext(ChatContext);
  // console.log("data are")
  // console.log(data)
  return (
    <div className='chat'>
       <div className="chatInfo">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
            </div>            
       </div>
       <Messages />
       <Input />
    </div>
  )
}

export default Chat
