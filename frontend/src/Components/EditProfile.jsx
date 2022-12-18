import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Text,
    Tooltip,
    useToast,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ProfileContext } from '../Context/ProfileContext';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';

// component will fetch this request from token or db
let initState = {
    name: 'Aman singh chauhan',
    dob: '2022-11-28',
    gender: 'Male',
    email: 'amansingh9723chauhan@gmail.com',
};

// will send the request in db to update user info
function edit(data) {
    console.log(data);
}

const EditProfile = () => {
    const { changeShow } = useContext(ProfileContext);
    const [data, setData] = useState(initState);
    const toast = useToast();

    // handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // handle click changes
    const handleClick = (e) => {
        setData({ ...data, gender: e.target.innerText });
    };

    return (
        <FormControl color="#828282" py="20px">
            <FormLabel fontSize={'12px'}>Your full name</FormLabel>
            <Input
                type="text"
                name="name"
                maxWidth={'445px'}
                height="52px"
                marginBottom="20px"
                onChange={handleChange}
                value={data.name}
            />
            <FormLabel fontSize={'12px'}>Email ID</FormLabel>
            <Input
                type="email"
                maxWidth={'445px'}
                height="52px"
                disabled={true}
                marginBottom="20px"
                value={data.email}
            />
            <FormLabel fontSize={'12px'}>Date of Birth</FormLabel>
            <Input
                type={'date'}
                maxWidth={'445px'}
                name="dob"
                value={data.dob}
                onChange={handleChange}
                height="52px"
            />
            <FormHelperText marginBottom="35px" fontSize={'12px'}>
                Age should be minimum 18 years
            </FormHelperText>
            <FormLabel fontSize={'12px'}>Gender</FormLabel>
            <Flex gap="20px" marginBottom="10px">
                <Button
                    onClick={handleClick}
                    bg={data.gender == 'Male' ? '#8230c6' : 'transparent'}
                    color={data.gender == 'Male' ? 'white' : 'null'}
                    border={'1px'}
                    p="0px 20px"
                    fontSize={'12px'}
                >
                    Male
                </Button>
                <Button
                    onClick={handleClick}
                    bg={data.gender == 'Female' ? '#8230c6' : 'transparent'}
                    color={data.gender == 'Female' ? 'white' : 'null'}
                    border={'1px'}
                    p="0px 30px"
                    fontSize={'12px'}
                >
                    Female
                </Button>
                <Button
                    onClick={handleClick}
                    bg={data.gender == 'Other' ? '#8230c6' : 'transparent'}
                    color={data.gender == 'Other' ? 'white' : 'null'}
                    border={'1px'}
                    p="0px 30px"
                    fontSize={'12px'}
                >
                    Other
                </Button>
            </Flex>
            <Tooltip
                label="To personalise your MULTIVIEW experience"
                hasArrow
                bg="gray"
            >
                <Flex
                    maxWidth={'300px'}
                    color="#828282"
                    alignItems="center"
                    gap={'10px'}
                    marginBottom="30px"
                >
                    <AiOutlineInfoCircle></AiOutlineInfoCircle>
                    <Text fontSize={'10px'}>Why do we need this?</Text>
                </Flex>
            </Tooltip>
            <Flex gap="44px">
                <Button
                    onClick={() => changeShow('profile')}
                    bg="transparent"
                    color="white"
                    border="1px solid white"
                    p="20px 50px"
                    fontSize={'14px'}
                >
                    Go back
                </Button>
                <Button
                    bgColor={'#8230c6'}
                    color="white"
                    p="20px 50px"
                    fontSize={'14px'}
                    onClick={() => {
                        edit(data);
                        toast({
                            render: () => (
                                <Box color="white" p={3} bg="grey">
                                    Changes saved successfully
                                </Box>
                            ),
                            duration: 3000,
                        });
                    }}
                    disabled={!(data.name && data.dob && data.gender)}
                >
                    Save Changes
                </Button>
            </Flex>
        </FormControl>
    );
};

export default EditProfile;
