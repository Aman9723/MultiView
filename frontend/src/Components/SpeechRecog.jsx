import React from 'react';
import { BsMic } from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { SpeechContext } from '../Context/SpeechContext';
import { Box, Flex, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function SpeechRecog() {
    const animationKeyframes = keyframes`
    0% { transform: scale(1); border-radius: 50%; }
    25% { transform: scale(2); border-radius: 50%; }
    50% { transform: scale(2); border-radius: 50%; }
    75% { transform: scale(1); border-radius: 50%; }
    100% { transform: scale(1); border-radius: 50%; }
`;

    const animation = `${animationKeyframes} 2s ease-in-out infinite`;
    const { speech, changeSpeech } = React.useContext(SpeechContext);
    let result = false;

    const SpeechRecognition =
        window.webkitSpeechRecognition || window.speechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (e) => {
        result = true;
        changeSpeech('read', e.results[0][0].transcript);
    };

    recognition.onend = (e) => {
        if (!result) changeSpeech('error', "Sorry, didn't get that...");
    };

    if (speech.status == 'listen') {
        return (
            <Flex
                h={{ base: '200px', md: '140px' }}
                width="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#0e0616"
                position={'fixed'}
                flexDir={'column'}
                top="0px"
                zIndex={1}
                gap="40px"
            >
                <Box
                    border={'1px solid white'}
                    as={motion.div}
                    animation={animation}
                    padding="2"
                    bg="#f17a7a"
                    width="12"
                    height="12"
                    display="flex"
                    alignItems={'center'}
                    justifyContent="center"
                >
                    <Flex>
                        <BsMic></BsMic>
                    </Flex>
                </Box>
                <Box
                    position={{ base: 'static', md: 'absolute' }}
                    left="30px"
                    fontSize={'28px'}
                    color="#828282"
                >
                    {speech.text}
                </Box>
            </Flex>
        );
    } else if (speech.status == 'empty') {
        return (
            <BsMic
                className="mic"
                size={'25'}
                onClick={() => {
                    recognition.start();
                    changeSpeech('listen', 'I am listening...');
                }}
            ></BsMic>
        );
    } else if (speech.status == 'error') {
        setTimeout(() => {
            changeSpeech('empty', '');
        }, 3000);
        return (
            <Flex
                h={{ base: '180px', md: '140px' }}
                width="100vw"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#0e0616"
                position={'fixed'}
                top="0px"
                zIndex={1}
                gap="40px"
                flexDir={'column'}
            >
                <Box
                    border={'1px solid white'}
                    borderRadius="50%"
                    padding="2"
                    bg="grey"
                    width="20"
                    height="20"
                    display="flex"
                    alignItems={'center'}
                    justifyContent="center"
                >
                    <Flex>
                        <BiErrorCircle color="black" size={50}></BiErrorCircle>
                    </Flex>
                </Box>
                <Box
                    position={{ base: 'static', md: 'absolute' }}
                    left="30px"
                    fontSize={'28px'}
                    color="white"
                >
                    {speech.text}
                </Box>
            </Flex>
        );
    }
}

export default SpeechRecog;
