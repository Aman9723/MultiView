import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { LoginData, Sigup_google } from "../store/Auth/auth.action";
import skill from "../Images/multiview.png"







const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [pass, setPass] = useState("");
  // const [pas, setPas] = useState("");

  const token = useSelector((store) => store.auth.user.token);
  console.log(token);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlegoogle = () => {
    dispatch(Sigup_google());
  };

  const Submitdata = () => {
    // console.log(email, password);
    dispatch(LoginData(email, password));
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  },token);

  return (
    <>
      <Box display="flex"  width="100%">
        <Box
          w="75%"
          // border="1px solid red"
          margin="auto"
        >
          <Box m="5px">
            <Link to="/">
              <Image
                src={skill}
                style={{ height: "50px",width:"180px", marginLeft:"450px", marginTop:"20px" }}
                alt="NavProjectLogo"
              />
            </Link>
           
          </Box>
          <Link to="/login"></Link>
        

          <Box w="43%" ml="23%" boxShadow="dark-lg" p="8" mt="2%">
            <Heading as="h3" size="lg">
             Login in Multi-View{" "}
            </Heading>
            <br />
            <p>Login to continue enjoying uninterrupted video and personalised experience.</p>

            <FormControl isRequired padding="5%">
              <Input
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup size="md" mt="20px">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Box display="flex" justifyContent="space-between" mt="10px">
                <Box>
                  <Checkbox isInvalid>Stay Logged in</Checkbox>
                </Box>
                <Box color="blue" cursor="pointer">
                  Forgot password?
                </Box>
              </Box>
              <Button w="100%" mt="20px" color="white" fontSize={"18px"} bgColor={"green"} width="130px" onClick={Submitdata}>
                LOGIN
              </Button>
              

              <Text  fontSize="14px" color="grey" mt="10px">
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  fontWeight: "600",
                  color: "#1b74e4",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Singup
              </Link>
            </Text>

              <Box mt="20px">
                {" "}
                <b>OR</b>
                {/* <hr /> */}
              </Box>
              <div
                onClick={handlegoogle}
                style={{
                  opacity: "0.98",
                  fontSize: "14px",
                  color: "black",
                  borderRadius: "4px",
                  border: "1px solid #c6c6c6",
                  fontWeight: "700",
                  marginTop: "0px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  margin: "auto",
                  height: "40px",
                }}
              >
                <img
                  src="https://app.clockify.me/assets/ui-icons/icon-google.svg"
                  alt=""
                />
                <p>Continue with Google</p>
              </div>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
