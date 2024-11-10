import React, { createContext, useContext, useEffect, useState } from 'react';


const ChatContext=createContext()

const ChatProvider=({children})=>{ 
    const [user,setUser]=useState()
    const [selectedChat,setSelectedChat]=useState()
    const [chats,setChats]=useState([])
    const [fetchAgain,setFetchAgain]=useState(false)

   

  
   

    useEffect(()=>{
       const userInfo=JSON.parse( localStorage.getItem("userInfo"))
       console.log(userInfo);
       setUser(userInfo)
       
       
       
    },[])

return (

    <ChatContext.Provider value={{user,setUser,selectedChat,setSelectedChat,chats,setChats,fetchAgain,setFetchAgain}}>
      {children}
    </ChatContext.Provider>
  
)
}

export const ChatState=()=>{
    return useContext(ChatContext)
}

export default ChatProvider