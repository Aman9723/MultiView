import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const WatchlistBox = ({ item, deleteWatchlist }) => {
    return (
        <>
            <Flex gap={'15px'}>
                <Image src={item.image} height={'150px'}></Image>
                <Text fontSize={'16px'} fontWeight="bold">
                    {item.title}
                </Text>
                <RxCross2
                    color="gray"
                    size={20}
                    cursor="pointer"
                    onClick={deleteWatchlist}
                ></RxCross2>
            </Flex>
        </>
    );
};

export default WatchlistBox;
