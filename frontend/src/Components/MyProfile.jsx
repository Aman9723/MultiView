import { Divider, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
import ProfileNavbar from './ProfileNavbar';
import ProfileHeader from './ProfileHeader';
import EditProfile from './EditProfile';

const MyProfile = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 991;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    const { show, changeShow } = useContext(ProfileContext);

    return (
        <Flex
            px={{ base: '0px', lg: '60px' }}
            bg="#0f0617"
            py={{ base: '0px', lg: '20px' }}
        >
            {width > breakPoint ? <ProfileNavbar cur="profile" /> : null}
            <Flex
                flexDir="column"
                px={{ base: '20px', lg: '30px' }}
                py={{ base: '20px', lg: '20px' }}
                width={'100%'}
                h={{ base: 'auto', sm: '650px' }}
                borderTop={'1px solid #241d2a'}
                borderBottom={'1px solid #241d2a'}
                borderRight={'1px solid #241d2a'}
            >
                <ProfileHeader
                    text={show == 'profile' ? 'My Profile' : 'Edit Profile'}
                />
                <Divider width={'100%'} />
                {show == 'profile' ? (
                    <Flex
                        flexDir={{ base: 'column', lg: 'row' }}
                        paddingTop="40px"
                        gap="23px"
                    >
                        <Flex
                            borderRadius={'50%'}
                            bg="#8230c6"
                            boxSize={'20'}
                        ></Flex>
                        <Flex flexDir={'column'} gap="9px">
                            <Text color={'#bdbdbd'} fontSize="14px">
                                amansingh9723chauhan@gmail.com
                            </Text>
                            <Text
                                onClick={() => changeShow('edit')}
                                color={'#a785ff'}
                                fontSize="14px"
                                cursor={'pointer'}
                            >
                                Edit Profile
                            </Text>
                        </Flex>
                    </Flex>
                ) : (
                    <EditProfile />
                )}
            </Flex>
        </Flex>
    );
};

export default MyProfile;
