import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ProfileHeader = ({ text }) => {
    return (
        <Flex flexDir="column" width={'100%'} marginBottom="30px">
            <Text fontSize={'30px'} fontWeight="700">
                {text}
            </Text>
        </Flex>
    );
};

export default ProfileHeader;
