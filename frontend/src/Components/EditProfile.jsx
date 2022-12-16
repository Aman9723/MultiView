import {
    Button,
    Divider,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const EditProfile = () => {
    const { changeShow } = useContext(ProfileContext);

    return (
        <FormControl color="#828282" py="20px">
            <FormLabel fontSize={'12px'}>Your full name</FormLabel>
            <Input
                type="text"
                maxWidth={'445px'}
                height="52px"
                marginBottom="20px"
            />
            <FormLabel fontSize={'12px'}>Email ID</FormLabel>
            <Input
                type="email"
                maxWidth={'445px'}
                height="52px"
                disabled={true}
                marginBottom="20px"
            />
            <FormLabel fontSize={'12px'}>Date of Birth</FormLabel>
            <Input type={'date'} maxWidth={'445px'} height="52px" />
            <FormHelperText marginBottom="35px" fontSize={'12px'}>
                Age should be minimum 18 years
            </FormHelperText>
            <FormLabel fontSize={'12px'}>Gender</FormLabel>
            <Flex gap="20px" marginBottom="10px">
                <Button
                    bg="transparent"
                    border={'1px'}
                    p="0px 20px"
                    fontSize={'12px'}
                >
                    Male
                </Button>
                <Button
                    bg="transparent"
                    border={'1px'}
                    p="0px 30px"
                    fontSize={'12px'}
                >
                    Female
                </Button>
                <Button
                    bg="transparent"
                    border={'1px'}
                    p="0px 30px"
                    fontSize={'12px'}
                >
                    Other
                </Button>
            </Flex>
            <Tooltip label="To personalise your MULTIVIEW experience" hasArrow>
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
            <Flex gap="44px" flexDir={{ base: 'column', sm: 'row' }}>
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
                >
                    Save Changes
                </Button>
            </Flex>
        </FormControl>
    );
};

export default EditProfile;
