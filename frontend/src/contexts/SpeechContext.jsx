import React from 'react';

export const SpeechContext = React.createContext();

function SpeechContextProvider({ children }) {
    const [speech, setSpeech] = React.useState({
        status: 'empty',
        text: '',
    });

    const changeSpeech = (status, text) => {
        setSpeech({ status, text });
    };

    return (
        <SpeechContext.Provider value={{ speech, changeSpeech }}>
            {children}
        </SpeechContext.Provider>
    );
}

export default SpeechContextProvider;
