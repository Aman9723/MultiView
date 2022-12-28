import React, { useState } from "react";
import styles from "../Style/payment.module.css";
import { Avatar, AvatarGroup, Divider, Button, FormControl, FormLabel, Select, Text, Input, Alert, Spacer, Show } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Icon, Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Payment() {
  const toast = useToast();
  const toastIdRef = React.useRef();
  const navigate = useNavigate();

  function addToast() {
    
    setTimeout(() => {
        if(Input.length == "") {
            Alert("Please fill the details");
        }
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />;
      navigate("/")
    }, 2000);
    toastIdRef.current = toast({
      position: "top",
      title:
        " Your Payment has been SuccessFull.",
      description: "Thanks and enjoy!",
      status: "success",
      duration: "5000",
    });
    
  }

  return (
    <>
      <div className={styles.payment}>
        {/* <div className={styles.head}>
          <img
            src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.66"
            alt=""
          />
          <div className={styles.user}>
            <AvatarGroup spacing="1rem">
              <Avatar bg="black" icon={<AiOutlineUser fontSize="1.5rem" />} />
            </AvatarGroup>
            <h1>
              Welcome rajan <br /> rajanrao@gmail.com{" "}
            </h1>
          </div>
        </div> */}
        <Navbar />
        <div className={styles.middle}>
          <div className={styles.midhead}>
            <h2>
              {" "}
              <Icon as={ArrowBackIcon} /> Make Payment
            </h2>
          </div>
          <div className={styles.payfirst}>
            <div>
              <h1>Premium HD</h1>
              <h2>Premium Plans</h2>
            </div>
            <div>
              <h1>
                ₹699 <Icon as={CheckCircleIcon} color="green" />
              </h1>
            </div>
          </div>
          <div className={styles.paysec}>
            <div>
              <Text fontSize='3xl' as='b' color={"black.300"} mt="0.8rem">Make Payment</Text>
              
              {/* <AvatarGroup mt="3" ml="4" spacing="1rem">
                <Avatar
                  bg="rgb(240,219,234)"
                  icon={<AiOutlineUser fontSize="1.5rem" />}
                />
              </AvatarGroup> */}
            </div>
          </div>
          <div className={styles.midpart}>
            <div className={styles.insideMidPart}>

            <Show   breakpoint='(min-width: 1000px)'>
              <div className={styles.firstpart}>
                <button>UPI</button>
                <button>Credit Card/Debit</button>
                <button>Wallets</button>
                <button>Net Banking</button>
              </div>
              </Show>
              <form>
                <FormControl isRequired pl='5rem' fontSize='4xl' w="100%" margin="auto" mt="2rem">
                  <FormLabel>Select Payment Method</FormLabel>
                  <Select placeholder="Select">
                    <option>UPI</option>
                    <option>Credit / Debit Card</option>
                  </Select>
                  <Text fontSize="2xl" as="b" color="purple.600">
                    Enter Credit / Debit Card Details
                  </Text>
                  <FormLabel mt="50px">Enter Card Number</FormLabel>
                  <Input type='number' placeholder="Enter Card Number" className="input"/>
                  <FormLabel mt="1rem">Expiry Date</FormLabel>
                  <Input
                    type="datetime-local"
                    size="md"
                    // value={card}
                    placeholder="Select Date and Time"
                  />
                 
                  <FormLabel mt="1rem">Enter CVV</FormLabel>
                  <Input type="password" placeholder="Enter CVV" />
                </FormControl>
                <Button onClick={addToast} mt={4} ml="24%" colorScheme="purple" type="submit" pr="8rem" pl="8rem" mb="2rem">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
export default Payment;

