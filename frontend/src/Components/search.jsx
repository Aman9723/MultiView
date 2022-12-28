import { Box, Button, Center, Container, Flex, Grid, Input, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import {  useDisclosure } from "@chakra-ui/react";
import  { useEffect} from "react";


import axios from "axios";


function Search() {
    const [text,setText] =useState("")
    const[data,setData] = useState([])
    
   let url = "https://api.themoviedb.org/3/search/movie?api_key=3e2781777064cd5e627152af0f4c73b7&query="

    const getsearch =()=>{
     
     axios
          .get(`${url}${text}`)
          .then((res) => {
            setData(res.data.results);
            
            //console.log(res.data.results)
           
          });
        setText("")
    }

    // useEffect(() => {
    //     axios
    //     .get(`${url}top`)
    //     .then((res) => {
    //       setData(res.data.results);
          
    //       //console.log(res.data.results)
         
    //     },[]);
      
    // })
          
         
          

  return (
    <Box>
      <Box>
        <Box ml={"2rem"}>
          <Text
            as="h1"
            textAlign="center"
            fontSize={["xl","2xl","3xl"]}
            fontWeight="500"
          >
            {" "}
            SEARCH
          </Text>

          <Stack>
            <Center>
            <Input
              width={["sm", "md", "lg"]}
              onChange={(e) => setText(e.target.value)}
              border="none"
              borderRadius="0"
              borderBottom="1px"
              borderColor="black"
              type="text"
              value={text}
              placeholder="search items...."
            />
            <Button onClick={getsearch} bg={'green.200'} color="black">
                <Text p={"10px"} >Submit</Text>
            </Button>
            </Center>
          </Stack>
        </Box>
        {!data ? (
          <Box width="400px" height="400px" bgColor="white">
            
          </Box>
        ) : (
          <SimpleGrid columns={[1,2,3,4]} spacing={5}>
            {data.map((el) => {
              return (
                <div>
      <Container mt="20px" cursor='pointer'>
      <Box boxShadow='md' p='6' rounded='md' bg='white'>
        <img src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`} alt="Image" />
        <Flex justify="space-between">
          <Text fontSize="xl" textAlign={"center"} mt={"0.7rem"}>{el.title}</Text>
          {/* <Text fontSize="xs">{el.overview}</Text> */}
        </Flex>
      </Box>
    </Container>
    </div>
              );
            })}
          </SimpleGrid>
        )}

        <Box>
          <Box pos="fixed" top="52px" right="10px" zIndex="3">
          
            
           
          </Box>
        </Box>
      </Box>
    
    </Box>
  );
  
}

export default Search
