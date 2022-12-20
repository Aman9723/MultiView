import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  WrapItem,
  Wrap,
  useToast,
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import LoginOtp from "./LoginOtp";
import Navbar from "../Components/Navbar";

function Login() {
  const navigate = useNavigate();
  const { setData, setOtp, isLogin } = useContext(AppContext);
  const [text, setText] = useState({ email: "" });

  const toast = useToast();

  const handleSignup = () => {
    const val = Math.floor(1000 + Math.random() * 9000);
    // alert ("Your One time Pin is"+"\n"+val);

    toast({
      title: `Your One time Pin is ${val}`,
      position: "top",
      isClosable: true,
    });

    setData({ email: text.email });
    setText({ email: "" });
    setOtp(val);
    goToOtp();
  };

  const goToOtp = () => {
    navigate("/loginotp");
  };
  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
     <Navbar/>
      <Box mb={7} height="100%" marginTop="2rem">
        <Center>

     
        <Text fontSize="xl" fontWeight="bold" lineHeight="3em" marginTop="2rem">
          Login to ZEE5
        </Text>
        </Center>
        <Center>
        <Text lineHeight="1.2em" color="gray">
          Login to continue enjoying uninterrupted video and <br /> personalised
          experience
          
        </Text>
        </Center>
       
        <VStack gap={7} mt={7} mb={4}>
          <HStack gap={4}>
            <Flex
              h="44px"
              w="44px"
              borderRadius="50%"
              bg="whitesmoke"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <DiApple style={{ color: "black", fontSize: "1.7rem" }} />
            </Flex>
            <Flex
              h="44px"
              w="44px"
              borderRadius="50%"
              bg="whitesmoke"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <FcGoogle style={{ fontSize: "1.4rem" }} />
            </Flex>
            <Flex
              h="44px"
              w="44px"
              borderRadius="50%"
              bg="dodgerblue"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <FaFacebookF style={{ fontSize: "1.4rem" }} />
            </Flex>
            <Flex
              h="44px"
              w="44px"
              borderRadius="50%"
              bg="blue.500"
              align="center"
              justify="center"
              cursor="pointer"
            >
              <FaTwitter style={{ fontSize: "1.2rem" }} />
            </Flex>
          </HStack>
          <Button
            bg="rgb(69, 9, 71)"
            _hover="rgb(69, 9, 71)"
            borderRadius={100}
            h="44px"
            w="44px"
            fontWeight="bold"
            pb={1}
            color="white"
            
          >
            or
          </Button>
        </VStack>
        <VStack gap={4}>
          <Input
          textAlign={"center"}
            value={text.email}
            onChange={(event) =>
              setText({ ...text, email: event.target.value })
            }
            type="email"
            variant="flushed"
            borderColor="rgb(111, 111, 111)"
            color="black"
            focusBorderColor="rgb(176, 80, 255)"
            placeholder="E-mail or mobile number"
            w="333px"
          />

          <Link color="purple">Forgot Password</Link>

          <Button
            onClick={handleSignup}
            w="333px"
            h="47px"
            variant="outline"
            borderColor="rgb(111, 111, 111)"
            _hover="transparent"
            color="white"
            backgroundColor={"green"}
          >
            Login
          </Button>
          <Text fontSize="sm" color="gray" className="didNot">
            New to ZEE5?
            <Link to="/signup" onClick={goToSignUp} color="purple">
              Register
            </Link>
          </Text>
        </VStack>
      </Box>
    </>
  );
}

export default Login;
