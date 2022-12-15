import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import SpeechContextProvider from './contexts/SpeechContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <SpeechContextProvider>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </SpeechContextProvider>
    </BrowserRouter>
);


