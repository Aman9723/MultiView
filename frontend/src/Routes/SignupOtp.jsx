import React, { useContext } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Box,
  Text,
  Button,
  useToast,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const SignUpOtp = () => {
  const navigate = useNavigate();
  const [pinNumber, setPinNumber] = useState();
  const { otp } = useContext(AppContext);

  const toast = useToast();

  function handleOtp() {
    if (pinNumber == otp) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      navigate("/login");
    } else {
      toast({
        title: `Wrong OTP`,
        status: "error",
        isClosable: true,
        position:"top"
      });
    }
  }

  return (
    <>
      <Navbar />

      <Box mb={7} height="100%" pt="2rem" textAlign={'center'}>
      <Box boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" w={{lg:"30%",md:"50%",sm:"80%"}} m="5rem auto">
        <Text fontSize="xl" fontWeight="bold" lineHeight="3em">
          Create a new account
        </Text>
        <Text lineHeight="1.2em" color="gray">
          An OTP has been sent to the entered mobile
          <br /> number +91 46834 37839{" "}
          <Link className="Number">Change Number?</Link>
        </Text>
        
        
        {/* <VStack gap={3}> */}
        <Center>
         <HStack className="pincode" display="inline-block" m='2rem 0'>
          <PinInput onChange={(value) => setPinNumber(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          
        </HStack>
        </Center>
        <Text fontSize="sm" color="gray" className="didNot">
          Did not get the OTP? <Link className="Resend">Resend</Link>
        </Text>

        <Button
          className="verify"
          onClick={handleOtp}
          w="333px"
          h="47px"
          variant="outline"
          borderColor="rgb(111, 111, 111)"
        >
          Verify
        </Button>
      </Box>
      </Box>
    </>
  );
};

export default SignUpOtp;
