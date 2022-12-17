import {
  Box,
  Button,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "../Style/Footer.module.css";

function Footer() {
  return (
    <Box
      borderTop="1px solid rgb(27, 27, 27)"
      py={7}
      px={14}
      color="lightgray"
      backgroundColor="black"
    >
      <HStack gap={3}>
        <Text className={styles.footer} fontWeight="bold">
          Download Apps
        </Text>
        <Image src="https://www.zee5.com/images/play_store.png?ver=2.52.15" />
        <Image src="https://www.zee5.com/images/app_store.png?ver=2.52.15" />
        <Spacer />
        <Text className={styles.footer} fontWeight="bold">
          Connect with us
        </Text>
        <HStack gap={1}>
          <Button
            color="blue.500"
            bg="rgb(34, 26, 41)"
            p={3}
            borderRadius="50%"
          >
            <FaFacebook />
          </Button>
          <Button color="#f24b8f" bg="rgb(34, 26, 41)" p={3} borderRadius="50%">
            <FaInstagram />
          </Button>
          <Button
            color="blue.300"
            bg="rgb(34, 26, 41)"
            p={3}
            borderRadius="50%"
          >
            <FaTwitter />
          </Button>
          <Button color="red.500" bg="rgb(34, 26, 41)" p={3} borderRadius="50%">
            <FaYoutube />
          </Button>
        </HStack>
      </HStack>
      <HStack my={7} gap={4} color="rgb(111, 111, 111)" fontSize="12px">
        <Box className={styles.footerHover} borderRight="1px solid gray" pr={7}>
          About us
        </Box>
        <Box className={styles.footerHover} borderRight="1px solid gray" pr={7}>
          Help Center
        </Box>
        <Box className={styles.footerHover} borderRight="1px solid gray" pr={7}>
          Privacy Policy
        </Box>
        <Box className={styles.footerHover}>Terms of Use</Box>
      </HStack>
      <HStack gap={10} mb={14}>
        <VStack fontSize="13px" align="start" color="rgb(111, 111, 111)">
          <Text
            className={styles.footer}
            fontWeight="bold"
            my={3}
            color="white"
          >
            Popular TV Shows
          </Text>
          <Text className={styles.footerHover}>Kumkum Bhagya</Text>
          <Text className={styles.footerHover}>Kundali Bhagya</Text>
          <Text className={styles.footerHover}>Bhagya Lakshmi</Text>
          <Text className={styles.footerHover}>Tujhse Hai Raabta</Text>
          <Text className={styles.footerHover}>
            Kyun Rishton Mein Katti Bat
          </Text>
        </VStack>
        <VStack fontSize="13px" align="start" color="rgb(111, 111, 111)">
          <Text
            className={styles.footer}
            fontWeight="bold"
            my={3}
            color="white"
          >
            Premium Movies
          </Text>
          <Text className={styles.footerHover}>
            Bhramhastra
          </Text>
          <Text className={styles.footerHover}>Helmet</Text>
          <Text className={styles.footerHover}>200 Halla Ho</Text>
          <Text className={styles.footerHover}>14 Phere</Text>
          <Text className={styles.footerHover}>Dial 100</Text>
        </VStack>
        <VStack fontSize="13px" align="start" color="rgb(111, 111, 111)">
          <Text
            className={styles.footer}
            fontWeight="bold"
            my={3}
            color="white"
          >
            Popular LIVE TV Channels
          </Text>
          <Text className={styles.footerHover}>Aaj Tak</Text>
          <Text className={styles.footerHover}>Zee News</Text>
          <Text className={styles.footerHover}>Zee TV HD</Text>
          <Text className={styles.footerHover}>&TV HD</Text>
          <Text className={styles.footerHover}>Zee Marathi HD</Text>
        </VStack>
        <VStack fontSize="13px" align="start" color="rgb(111, 111, 111)">
          <Text
            className={styles.footer}
            fontWeight="bold"
            my={3}
            color="white"
          >
            Popular Web Series
          </Text>
          <Text className={styles.footerHover}>Sunflower</Text>
          <Text className={styles.footerHover}>Jeet Ki Zid</Text>
          <Text className={styles.footerHover}>Bicchoo Ka Khel</Text>
          <Text className={styles.footerHover}>State of Siege: 26/11</Text>
          <Text className={styles.footerHover}>Naxalbari</Text>
        </VStack>
        <VStack fontSize="13px" align="start" color="rgb(111, 111, 111)">
          <Text
            className={styles.footer}
            fontWeight="bold"
            my={3}
            color="white"
          >
            Bollywood Top Celebrities
          </Text>
          <Text className={styles.footerHover}>Ranveer Singh</Text>
          <Text className={styles.footerHover}>Disha Patani</Text>
          <Text className={styles.footerHover}>Deepika Padukone</Text>
          <Text className={styles.footerHover}>Salman Khan</Text>
          <Text className={styles.footerHover}>Nora Fatehi</Text>
        </VStack>
      </HStack>
      <Text
        w="lg"
        cursor="pointer"
        align="start"
        my={10}
        fontSize="12px"
        color="rgb(111, 111, 111)"
      >
        Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox
        75+, Safari 5.1.5+ <br />
        Copyright © 2022 Zee Entertainment Enterprises Ltd. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
