import React, { useEffect, useState } from 'react';
import { ChatState } from '../Contexts/ChatContext';
import axios from 'axios';
import { Box, Button, Stack, Text, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ChatLoading from './ChatLoading';
import { getsender } from '../config/Chatlogic';
import GroupChatModal from './GroupChatModal';

function  MyChats () {
    const {user,selectedChat,setSelectedChat,chats,setChats,fetchAgain}=ChatState()
    const [loggeduser,setLoggedUser]=useState()
    const [useffectun,setuseeffect]=useState(false)
    const toast=useToast()

   
    const fetchCHats=async()=>{
      
      try {
         
          const config={
              headers:{
                  Authorization:`Bearer ${user.data.user}`
             }
          }

         const {data}= await axios.get("http://localhost:3000/chats/fetchchats",config)
         console.log(data);
         setChats(data)
         setuseeffect(!useffectun)    
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to Load the chats",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
          
      }

     

  }

    useEffect(()=>{
       setLoggedUser( JSON.parse(localStorage.getItem("userInfo")))
       
       fetchCHats()
       console.log("chats:",chats);
       prints()
       
       
    },[fetchAgain])

    useEffect(()=>{})


    const prints=()=>{
      chats.data?.map((chat)=>console.log("each chat",chat)
      )
      

    }

    return (
     <>
     
    <Box
      
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      className='flex flex-col items-center'
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
     
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        className='flex justify-between items-center'
        w="100%"
       
      >
        My Chats
        
      
       
        <GroupChatModal>
        <Button
           className='flex'
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            
              
            
            New Group Chat
          </Button>
          </GroupChatModal>
        </Box>
        <Box
        className='flex flex-col'
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
        > 
        {chats? (
             < Stack overflowY="scroll">
                {chats.data?.map((chat)=>(
                  
                  
                   <Box
                   onClick={() => setSelectedChat(chat)}
                   cursor="pointer"
                   bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                   color={selectedChat === chat ? "white" : "black"}
                   px={3}
                   py={2}
                   borderRadius="lg"
                   key={chat._id}
                 >
                <Text>
                  {!chat.isGroupchat
                    ? getsender(user.data.loggedInUser, chat.users)
                    : chat.chatName}
                </Text>

                 </Box>
                ))}
        
              </Stack>
          )
               :(<ChatLoading/>)}

      </Box>
        </Box>
        </>
    )
}

export default MyChats;