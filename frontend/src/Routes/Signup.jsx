import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import SignUpOtp from "./SignupOtp";
import Navbar from "../Components/Navbar";


// signupotp export
export const generateOtp = () => {
  const val = Math.floor(1000 + Math.random() * 9000);
  return val;
}


function Signup() {
  const navigate = useNavigate();
  const { setData, setOtp } = useContext(AppContext);
  const [text, setText] = useState({ email: "" });
  const toast = useToast();




  const handleSignup = () => {
    
    const val = generateOtp()

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
    navigate("/signupotp");
  };
  const goTologin = () => {
    navigate("/login");
  };




  return (
    <>
      
    <Navbar/>
      <Box mb={7} height="100%">
        <Text fontSize="xl" fontWeight="bold" lineHeight="3em" marginTop="2rem" textAlign={"center"}>
          Create a new account
        </Text>
        <Text lineHeight="1.2em" color="gray" textAlign={"center"}>
          Create an account to continue enjoying <br /> uninterrupted video and
          personalised experience
        </Text>
        <VStack gap={7} mt={7} mb={4}>
          <Button
            className="sign"
            width="333px"
            color="white"
            fontWeight="bold"
            borderRadius={5}
            backgroundColor="black"
            marginRight="2rem"
          >
            <FcGoogle className="google-icon" /> Sign in
          </Button>
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
        <VStack gap={3}>
          <Input
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
          <Text fontSize="sm" color="gray">
            By proceeding you agree to our{" "}
            <Link color="purple">Terms of Service</Link> & <br />
            <Link color="purple">Privacy Policy</Link>
          </Text>
          <Button
            onClick={handleSignup}
            w="333px"
            h="47px"
            variant="outline"
            borderColor="rgb(111, 111, 111)"
            _hover="transparent"
            color="gray"
          >
            Send OTP
          </Button>
          <Text fontSize="sm" color="gray">
            Already Registered?
            <Link to="/login" onClick={goTologin} color="purple">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
      
    </>
  );
}
export default Signup;
