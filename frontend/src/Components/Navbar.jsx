import {
  Flex,
  Spacer,
  Input,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
  Divider,
  Square,
  Img,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaCrown, FaRegUser } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { FiDownload, FiHelpCircle, FiSettings } from "react-icons/fi";
import { FcAbout } from "react-icons/fc";
import { RiLogoutCircleRLine } from "react-icons/ri";
import styles from "../Style/Navbar.module.css";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DragHandleIcon,
} from "@chakra-ui/icons";
import { useRef } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import SpeechRecog from "./SpeechRecog";

const baseStyle = {
  color: "gray",
  paddingBottom: "4px",
  borderBottom: "none",
};

const activeStyle = {
  color: "white",
  paddingBottom: "4px",
  borderBottom: "2px solid white",
};

function Navbar() {
const { isLogin, setIsLogin, data } = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      gap={7}
      p={5}
      align="center"
      position="sticky"
      top="0"
      zIndex="7"
      borderBottom="1px solid rgb(27, 27, 27)"
      bg="rgb(15, 6, 23)"
      mt="-2rem"
    >
      <NavLink to="/">
        <Image
          h="47px"
          src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.15"
          alt="app logo"
          mr={4}
        />
      </NavLink>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/tvShows"
        style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        end
      >
        TV Shows
      </NavLink>
      <NavLink
        to="/movies"
        style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
        end
      >
     
      </NavLink>

      <Square color="white">
        <ul className={styles.dropdown}>
          <DragHandleIcon boxSize={4} className={styles.dropbtn} />

          <div className={styles.dropdownContent}>
            <Link to="#">Webseries</Link>
            <Link to="#">Eduauraa</Link>
            <Link to="#">Premium</Link>
            <Link to="#">Live Tv</Link>
            <Link href="#">Music</Link>
            <Link to="#">Rents</Link>
            <Link to="#">Kids</Link>
            <Link to="#">Videos</Link>
          </div>
        </ul>
      </Square>

      <Spacer />
      <Input
        w="370px"
        color="white"
        focusBorderColor="purple.500"
        borderColor="rgb(111, 111, 111)"
        borderRadius="lg"
        placeholder="🔍 Search for Movies, Shows, Channels etc. "
      />

<SpeechRecog/>

      <HStack gap={2}>
        {isLogin ? (
          <Text className={styles.nav} onClick={() => setIsLogin(!isLogin)} end>
            Logout
          </Text>
        ) : (
          <NavLink className={styles.nav} to="/login" end>
            Login
          </NavLink>
        )}
        
       

       
        <NavLink className={styles.buy} to="/premiumplan" end>
          BUY PLAN
        </NavLink>

        <Button ref={btnRef} onClick={onOpen} className={styles.butt}>
          <FaBars className={styles.icon} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent className={styles.drawer}>
            <DrawerCloseButton className={styles.close} />
            <NavLink to="/">
              <Text className={styles.white}> Home</Text>
            </NavLink>

            <Divider />

            <Text className={styles.grey}>
              {" "}
              Explore
              <ChevronDownIcon className={styles.iconArrow} />
            </Text>
            <Divider />
            <Text className={styles.grey}>
              {" "}
              Plans <ChevronUpIcon className={styles.iconArrowUpP} />
            </Text>
            <Link to="/premiumplan" className={styles.white}>
              {" "}
              Buy Plan
            </Link>
            <Text className={styles.white}> Have a prepaid code ?</Text>

            <Divider />

            <Text className={styles.grey}>
              {" "}
              Settings <ChevronUpIcon className={styles.iconArrowUpS} />
            </Text>
            <Text className={styles.white}> Reset settings to default</Text>

            <Divider />
            <Text className={styles.grey}>
              {" "}
              Info <ChevronUpIcon className={styles.iconArrowUpI} />
            </Text>
            <Text className={styles.white}> About Us</Text>
            <Text className={styles.white}> Help Center</Text>
            <Text className={styles.white}> Content Redressal Mechanism</Text>
            <Text className={styles.white}> Terms of Use</Text>
            <Text className={styles.white}> Privacy Policy</Text>
            <Divider />
          </DrawerContent>
        </Drawer>
      </HStack>
      
    </Flex>
  );
}

export default Navbar;
