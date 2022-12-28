import React, { useContext } from "react";
import {
  PinInput,
  PinInputField,
  HStack,
  Box,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import {generateOtp} from "./Signup"

const SignUpOtp = () => {
  const navigate = useNavigate();
  const [pinNumber, setPinNumber] = useState();
  const { otp, setOtp} = useContext(AppContext);

  const toast = useToast();

const resendOtp = () => {
  const val = generateOtp()
  setOtp(val)
  toast({
    
    description: `Your NEW OTP ${val}`,
    position: "top",
    status: "success",
    duration: 4000,
    isClosable: true,
  });
}


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
      });
    }
  }

  return (
    <>
      <Navbar />

      <Box mb={7} height="100%" marginTop="2rem">
        <Text fontSize="xl" fontWeight="bold" lineHeight="3em" textAlign={"center"}>
          Create a new account
        </Text>
        <Text lineHeight="1.2em" color="gray" textAlign={"center"}>
          An OTP has been sent to the entered mobile
          <br /> number +91 46834 37839{" "}
          <Link className="Number">Change Number?</Link>
        </Text>

        {/* <VStack gap={3}> */}
        <HStack className="pincode">
          <PinInput onChange={(value) => setPinNumber(value)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        <Text fontSize="sm" color="gray" className="didNot" textAlign={"center"}>
          Did not get the OTP? <Link className="Resend" onClick={resendOtp}>Resend</Link>
        </Text>

        <Button
          className="verify"
          onClick={handleOtp}
          w="333px"
          h="47px"
          variant="outline"
          borderColor="rgb(111, 111, 111)"
          display="block"
          margin="auto"
        >
          Verify
        </Button>
      </Box>
    </>
  );
};

export default SignUpOtp;
