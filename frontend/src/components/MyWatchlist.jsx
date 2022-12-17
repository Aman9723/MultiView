import ProfileNavbar from './ProfileNavbar';
import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';

const MyWatchlist = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 991;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <Flex
            px={{ base: '0px', lg: '60px' }}
            bg="#0f0617"
            py={{ base: '0px', lg: '20px' }}
        >
            {width > breakPoint ? <ProfileNavbar cur="watchlist" /> : null}
            <Flex
                flexDir="column"
                px={{ base: '20px', lg: '30px' }}
                py={{ base: '20px', lg: '20px' }}
                width={'100%'}
                h="650px"
                borderTop={'1px solid #241d2a'}
                borderBottom={'1px solid #241d2a'}
                borderRight={'1px solid #241d2a'}
            >
                <ProfileHeader text={'My Watchlist'} />
                <Divider width={'100%'} />
                <Flex
                    alignItems={'center'}
                    justifyContent="center"
                    flexDir={'column'}
                >
                    <Image src="../sadFile.png" boxSize={'52'}></Image>
                    <Text color={'#828282'} fontSize="30px">
                        Uh-Oh! Nothing to watch
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default MyWatchlist;
