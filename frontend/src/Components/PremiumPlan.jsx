import React, { useState } from 'react';
import {
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    ButtonGroup,
    Center,
    Card,
    CardBody,
    Wrap,
    WrapItem,
    Heading,
    Box,
    Stack,
    StackDivider,
    Badge,
    useToast,
} from '@chakra-ui/react';
import {
    Icon,
    ChevronUpIcon,
    InfoIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import styles from '../Style/plan.module.css';
import { Link } from 'react-router-dom';

const PremiumPlan = () => {
    const toast = useToast();
    const toastIdRef = React.useRef();
    const [first, setFirst] = useState(399);
    const [second, setSecond] = useState(699);
    const [third, setThird] = useState(1499);
    function addToast() {
        toastIdRef.current = toast({ description: '₹399 is applied' });
        const first = 399;
    }
    function secondToast() {
        toastIdRef.current = toast({ description: '₹699 is applied' });
        const second = 699;
        setSecond(Math.floor(second - (second * 30) / 100));
    }
    function thirdToast() {
        toastIdRef.current = toast({ description: '₹1499 is applied' });
        const third = 1499;
        setThird(Math.floor(third - (third * 25) / 100));
    }
    console.log(first);
    console.log(second);
    console.log(third);
    const OverlayOne = () => (
        <ModalOverlay
            bg="white"
            backdropFilter="blur(10px) hue-rotate(90deg)"
        />
    );

    const OverlayTwo = () => (
        <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="80%"
            backdropBlur="2px"
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    return (
        <>
            <Button
                ml="4"
                onClick={() => {
                    setOverlay(<OverlayTwo />);
                    onOpen();
                }}
            >
                Buy Plan
            </Button>

            <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent
                    bg="rgb(15,6,23)"
                    mt="400px"
                    color="whiteAlpha.800"
                >
                    <ModalHeader>
                        <Center>Choose your premium plan</Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Card
                            borderRight="none"
                            color="whiteAlpha.700"
                            w="auto"
                            h="56"
                            overflow="hidden"
                            overflowY="scroll"
                        >
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing="4">
                                    <Box>
                                        <Heading fontSize="10px">
                                            Premium Content
                                        </Heading>
                                        <Text pt="2" fontSize="8px">
                                            Movies, Web Series, TV Shows, Live
                                            TV, Downloads
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading fontSize="10px">
                                            Ad-free
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Heading fontSize="10px">
                                            Device
                                        </Heading>
                                        <Text pt="2" fontSize="8px">
                                            Mobile, TV and Laptop
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading fontSize="10px">
                                            No. of screens
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Heading fontSize="10px">
                                            Max audio quality
                                        </Heading>
                                    </Box>
                                    <Box>
                                        <Heading fontSize="10px">
                                            Max video quality
                                        </Heading>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                        <Wrap ml="14px">
                            <WrapItem
                                onClick={addToast}
                                type="WrapItem"
                                className={styles.item}
                                display="grid"
                            >
                                <Center ml="2" mt="6" fontSize="x-small">
                                    Premium HD
                                </Center>
                                <Center ml="2" mt="2" fontSize="medium">
                                    ₹399
                                </Center>
                                <Center ml="2" mt="-1" fontSize="small">
                                    12 Months
                                </Center>
                            </WrapItem>
                            <WrapItem
                                onClick={secondToast}
                                type="WrapItem"
                                className={styles.item}
                                display="grid"
                            >
                                <Stack direction="row">
                                    <Badge variant="solid" colorScheme="green">
                                        Save 30%
                                    </Badge>
                                </Stack>
                                <Center ml="2" mt="-1" fontSize="x-small">
                                    Premium HD
                                </Center>
                                <Center
                                    textDecoration="line-through"
                                    ml="2"
                                    mt="-3"
                                    fontSize="x-small"
                                >
                                    ₹999
                                </Center>
                                <Center ml="2" mt="-2" fontSize="medium">
                                    ₹699
                                </Center>
                                <Center ml="2" mt="-1" fontSize="small">
                                    12 Months
                                </Center>
                            </WrapItem>
                            <WrapItem
                                onClick={thirdToast}
                                type="WrapItem"
                                className={styles.item}
                                display="grid"
                            >
                                <Stack direction="row">
                                    <Badge variant="solid" colorScheme="green">
                                        Save 25%
                                    </Badge>
                                </Stack>
                                <Center ml="2" mt="-1" fontSize="x-small">
                                    Premium 4K
                                </Center>
                                <Center
                                    textDecoration="line-through"
                                    ml="2"
                                    mt="-3"
                                    fontSize="x-small"
                                >
                                    ₹1999
                                </Center>
                                <Center ml="2" mt="-2" fontSize="medium">
                                    ₹1499
                                </Center>
                                <Center ml="2" mt="-1" fontSize="smaller">
                                    12 Months
                                </Center>
                            </WrapItem>
                        </Wrap>
                        <Card mt="5" cursor="pointer" bg="rgb(29,20,37)" h="8">
                            <CardBody>
                                <Text mt="-4" color="whiteAlpha.800">
                                    {' '}
                                    <Icon as={InfoIcon}></Icon> Apply Code{' '}
                                    <Icon
                                        ml="72"
                                        w={6}
                                        h={6}
                                        color="whiteAlpha.800"
                                        as={ChevronRightIcon}
                                    />
                                </Text>
                            </CardBody>
                        </Card>
                        <Center
                            h="50px"
                            fontSize="xx-small"
                            color="rgb(130,130,130)"
                        >
                            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                            availability subject to your internet service and
                            device capabilities. Not all content is available in
                            all resolutions. See our Terms of Use for more
                            details
                        </Center>
                    </ModalBody>
                    <ModalFooter justifyContent="center">
                        <ButtonGroup
                            borderBottomRightRadius="md"
                            borderBottomLeftRadius="md"
                            bg="rgb(29,20,37)"
                            w="auto"
                            h="16"
                            border="1px solid black"
                            variant="link"
                            spacing="10"
                        >
                            <Link to="/payment">
                                <Button
                                    w="56"
                                    textColor="whiteAlpha.800"
                                    mt="3"
                                >
                                    Pay Using UPI{' '}
                                    <Icon
                                        w={8}
                                        h={8}
                                        color="whiteAlpha.800"
                                        as={ChevronUpIcon}
                                    ></Icon>{' '}
                                </Button>
                            </Link>
                            <Button
                                w="56"
                                textColor="whiteAlpha.800"
                                mt="3"
                                bg="rgb(130,48,198)"
                                colorScheme="black"
                            >
                                {' '}
                                <Link to="/Payment">Buy Premium </Link>{' '}
                            </Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PremiumPlan;
