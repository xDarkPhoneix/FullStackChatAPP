import React from 'react';
import { IconButton, Modal, ModalBody, ModalCloseButton,ModalFooter, ModalContent, ModalHeader, ModalOverlay, useDisclosure ,Button, Image} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';

function  GroupProfileModal ({user,children}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
   

    return (
      <>
       {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}
       <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader
            fontSize="40px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user?.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
           className='flex flex-col items-center justify-between'
           
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user?.pic}
              alt={user?.name}
            />
            <Text
              fontSize={{ base: "28px", md: "30px" }}
              fontFamily="Work sans"
            >
              Email: {user?.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}

export default GroupProfileModal;