import React from 'react';

export const ProfileContext = React.createContext();

function ProfileContextProvider({ children }) {
    const [show, setShow] = React.useState('profile');

    function changeShow(value) {
        setShow(value);
    }

    return (
        <ProfileContext.Provider value={{ show, changeShow }}>
            {children}
        </ProfileContext.Provider>
    );
}

export default ProfileContextProvider;
