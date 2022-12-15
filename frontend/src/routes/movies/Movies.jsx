import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../movies/movies.Module.css";

const Movies = () => {
  return (
    <div className="bg">
      <div className="right">
        <h3>You're watching a trailer</h3>
        <div>
          <iframe
            width="60%"
            height="500"
            src="https://www.youtube.com/embed/_8mQN7CMg8k"
            title="Zee5 video player"
            frameBorder="0"
            autoPlay="allow"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Text fontSize="xl" as="b" color="white">
          Blurr
        </Text>
        <Flex as="b" color="purple.600" gap="10px">
          <Flex>Movies</Flex>
          <Flex>• 2022</Flex>
        </Flex>
        <br />
        <Flex as="b" color="purple.600" gap="10px">
          <Flex color="gray.600">2h 6m</Flex>
          <Flex>• Drama</Flex>
          <Flex>• Thriller</Flex>
          <Flex color="gray.600">• A</Flex>
        </Flex>
        <br />
        <Flex as="b" h="80px" w="250px" border="1px solid" gap="10px">
          <Flex>Share</Flex>
          <Flex>Wishlist</Flex>
          <Flex>Watch trailer</Flex>
        </Flex>
        <br />
        <Flex as="b" gap="10px">
          <Text color="white">Audio Languages:</Text>
          <Text color="purple.600">Hindi</Text>
        </Flex>

        <Flex as="b" gap="10px">
          <Text color="white">Subtitles:</Text>
          <Text color="gray.600">English</Text>
        </Flex>

        <br />
        <br />
        <Menu>
          <MenuButton
            as={Button}
            bg="none"
            color="white"
            _hover="none"
            rightIcon={<ChevronDownIcon />}
          >
            In this ZEE5 Original, Gayatri, a woman with a degenerative eye
            disorder, is slowly losing her eyesight. She, however, has to solve
            the mystery of her twin sister Gautami's death.
          </MenuButton>
          <MenuList bg="black">
            <MenuItem bg="black" border="none">
              <Flex direction="column" gap="15px">
                <Text>Cast:</Text>
                <Flex direction="row" as="b" gap="35px" color="white">
                  <Text>Gautami/Gayatri</Text>
                  <Text>Neel</Text>
                </Flex>
                <Flex direction="" as="b" gap="50px" color="purple.600">
                  <Text color="purple.600">Taapsee Pannu</Text>
                  <Text color="purple.600">Gulshan Devaiah</Text>
                </Flex>
              </Flex>
            </MenuItem>
            <br/>
            <MenuItem bg="black">
              <Flex direction="column" gap="15px">
              <Text>Creators:</Text>
              <Text color="white">Director</Text>
              <Text color="purple.600">Ajay Bahi</Text>
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="left">left</div>
    </div>
  );
};

export default Movies;
