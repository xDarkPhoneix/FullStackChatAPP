import React from 'react';
import { ChatState } from '../Contexts/ChatContext';
import { Box } from '@chakra-ui/react';
import SingleChat from '../components/SingleChat';

function  ChatBox () {
  const {selectedChat}=ChatState()
    return (
      <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      className='flex flex-col  items-center'
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    ><SingleChat />
      </Box>
    )
}

export default ChatBox;