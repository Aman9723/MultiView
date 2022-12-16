import { Flex, VStack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileNavbar = ({ cur }) => {
    return (
        <VStack
            borderTop={'1px solid #241d2a'}
            borderBottom={'1px solid #241d2a'}
            borderl={'1px solid #241d2a'}
            h="650px"
            bg="#1b1223"
            w="246px"
            p="24px 32px"
            textAlign={'left'}
        >
            <Link to="/myprofile">
                <Flex p="16px 0px" minW="170px" cursor={'pointer'}>
                    <Text
                        fontSize="16px"
                        color="#828282"
                        fontWeight={'400'}
                        _hover={{ color: '#c1c1c1' }}
                    >
                        My Profile
                    </Text>
                    {cur == 'profile' ? (
                        <Box
                            width={'2px'}
                            bg="white"
                            pos={'relative'}
                            right="-129px"
                        ></Box>
                    ) : null}
                </Flex>
            </Link>
            <Link to="/myprofile/watchlist">
                <Flex p="16px 0px" minW="170px" cursor={'pointer'}>
                    <Text
                        fontSize="16px"
                        _hover={{ color: '#c1c1c1' }}
                        color="#828282"
                        fontWeight={'400'}
                    >
                        My Watchlist
                    </Text>
                    {cur == 'watchlist' ? (
                        <Box
                            width={'2px'}
                            bg="white"
                            pos={'relative'}
                            right="-110px"
                        ></Box>
                    ) : null}
                </Flex>
            </Link>
        </VStack>
    );
};

export default ProfileNavbar;
