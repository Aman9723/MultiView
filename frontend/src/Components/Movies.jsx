import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Box,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./movies.Module.css";
import axios from "axios";
import styles from "../Style/LatestTest.module.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css";
import { FaPlay, FaShareAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LatestMovies from "./LastestTest";
import TopTenMovies from "./TopTenMovies";

const Movies = () => {
  const getData = () => {
    return axios.get("https://fake-restful-api.onrender.com/leadingLadies");
  };
  const [data, getdatafromApi] = React.useState([]);

  React.useEffect(() => {
    getData().then((res) => getdatafromApi(res.data));
  }, []);
  console.log(data);

  return (
    <div className="bg">
      <div className="video">
      <div className="right">
        <h3>You're watching a trailer</h3>
        <div>
          <iframe
            width="95%"
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
            <br />
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

      <div className="left">
        
        <Text fontSize="xl">Recommended Movies For You</Text>

        <div className={styles.outer}>
          <SimpleGrid
            columns={2}
            spacing={10}
            style={{
              "overflow-y": "scroll",
              "overflow": "-moz-scrollbars-none",
              "scrollbar-width": "none",
              "-ms-overflow-style": "none",
              "height": "700px",
            }}
          >
            {data.map((item) => (
              <Box className={styles.movies} key={item.id}>
                <div className={styles.mainlatest}>
                  <div>
                    <img src={item.url} className={styles.image} />
                  </div>

                  <div className={styles.share}>
                    <Box className={styles.playIcon}>
                      <FaPlay className={styles.play} />
                      <Text className={styles.watch}>Watch</Text>
                    </Box>

                    {/* share icon */}
                    <Box className={styles.lookshare}>
                      <FaShareAlt className={styles.faShare} />
                      <Text className={styles.look}>Share</Text>
                    </Box>

                    {/* title */}
                    <Box className={styles.title}>
                      <HStack>
                        <Text>{item.popupTitle}</Text>
                      </HStack>
                    </Box>
                  </div>
                </div>
              </Box>
            ))}
          </SimpleGrid>
        </div>
      </div>
      </div>

      <LatestMovies />
      <TopTenMovies />
    </div>
  );
};

export default Movies;
