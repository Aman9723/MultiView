import React from "react";
import {
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Icon,ChevronUpIcon,InfoIcon,ChevronRightIcon } from "@chakra-ui/icons";
import { Button, 
  Text,
  ButtonGroup,
  Center,
   Card, 
   CardHeader,
   CardBody, 
   CardFooter,
   Wrap,
   WrapItem
  } from "@chakra-ui/react";

const PremiumPlan = () => {

  const OverlayOne = () => (
    <ModalOverlay
      bg='white'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
   <>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Buy Plan
      </Button>
      
      <Modal size='lg' isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg='rgb(15,6,23)' color='whiteAlpha.800' >
          <ModalHeader>Choose your premium plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <Text>This is the premium page</Text>
          <Wrap ml='14px' >
          <WrapItem borderRadius='5px' w='140px' h='110px' borderWidth="1px">
            <Center>
              Box 1
            </Center>
          </WrapItem>
          <WrapItem borderRadius='5px' w='140px' h='110px' borderWidth="1px">
            <Center>
              Box 2
            </Center>
          </WrapItem>
          <WrapItem borderRadius='5px' w='140px' h='110px' borderWidth="1px">
            <Center>
              Box 3
            </Center>
          </WrapItem>
        </Wrap>
          <Card mt='5' cursor='pointer' bg='rgb(29,20,37)' h='8' >
           <CardBody>
            <Text mt='-4' color='whiteAlpha.800' > <Icon as={InfoIcon}></Icon> Apply Code <Icon ml='72' w={6} h={6} color='whiteAlpha.800' as={ChevronRightIcon}/></Text>
           </CardBody>
          </Card>
          <Center  h='50px' fontSize='xx-small' color='rgb(130,130,130)'>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details
          </Center>
          </ModalBody>
          <ModalFooter justifyContent='center'>
           <ButtonGroup borderBottomRightRadius='md' borderBottomLeftRadius='md' bg='rgb(29,20,37)' w='auto' h='16' border='1px solid black'  variant='link' spacing='10'>
           <Button w='56' textColor='whiteAlpha.800' mt='3' >Pay Using UPI <Icon w={8} h={8} color='whiteAlpha.800' as={ChevronUpIcon} ></Icon> </Button>
           <Button w='56' textColor='whiteAlpha.800' mt='3' bg='rgb(130,48,198)' colorScheme='black' >Buy Premium</Button>
          </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
   </>
  );
};

export default PremiumPlan;
