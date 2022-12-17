import ProfileNavbar from './ProfileNavbar';
import { Divider, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import ProfileHeader from './ProfileHeader';
import axios from 'axios';
import { useState } from 'react';
import WatchlistBox from './WatchlistBox';

const email = 'aman@gmail.com';

const MyWatchlist = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [watchlist, setWatchlist] = useState([]);
    const breakPoint = 991;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        // request watchlist of user from server
        getWatchlist(email).then((res) => setWatchlist(res));

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // get user specific watchlist
    const getWatchlist = async (email) => {
        let res = await axios.get(process.env.REACT_APP_BACKEND_URL, { email });
        res = res.data;
        return res;
    };

    // delete watchlist
    const deleteWatchlist = async (email, image) => {
        await axios.delete(process.env.REACT_APP_BACKEND_URL, { email, image });
        getWatchlist(email).then((res) => setWatchlist(res));
    };

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
                minHeight="650px"
                borderTop={'1px solid #241d2a'}
                borderBottom={'1px solid #241d2a'}
                borderRight={'1px solid #241d2a'}
            >
                <ProfileHeader text={'My Watchlist'} />
                <Divider width={'100%'} />
                {watchlist.length ? (
                    <Flex
                        py={'30px'}
                        wrap="wrap"
                        gap="20px"
                        justifyContent="space-between"
                    >
                        {watchlist.map((item) => (
                            <WatchlistBox
                                item={item}
                                deleteWatchlist={deleteWatchlist}
                            />
                        ))}
                    </Flex>
                ) : (
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
                )}
            </Flex>
        </Flex>
    );
};

export default MyWatchlist;
