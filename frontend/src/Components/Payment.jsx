import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  

  
  const Payment = () => {
      let id;
      const [loading, setLoading ] = useState(false);
      
      
      const handleSubmit = () => {
          if(id){
              clearTimeout(id);
          }
          id = setTimeout(() => {
              alert("Your Payment has been SuccessFull");
          }, 1000)
          setLoading(false);
      }
    return (
      <div>
        <Text fontSize="4xl" as="b" color="purple.600">
          Make PaymentDetails
        </Text>
  
        <form onSubmit={handleSubmit}>
          <FormControl isRequired w="70%" margin="auto" mt="100px">
            <FormLabel>Select Payment Method</FormLabel>
            <Select placeholder="Select">
              <option>UPI</option>
              <option>Credit / Debit Card</option>
            </Select>
            <Text fontSize="2xl" as="b" color="purple.600">
              Enter Credit / Debit Card Details
            </Text>
            <FormLabel mt="50px">Enter Card Number</FormLabel>
            <Input placeholder="Enter Card Number" />
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="datetime-local"
              size="md"
              placeholder="Select Date and Time"
            />
            <FormLabel>Enter CVV</FormLabel>
            <Input type="password" placeholder="Enter CVV" />
          </FormControl>
          <Button mt={4} ml='40%' colorScheme="purple" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  };
  
  export default Payment;