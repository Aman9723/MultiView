import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SpeechContextProvider from './contexts/SpeechContext';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProfileContextProvider from './contexts/ProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProfileContextProvider>
        <Provider store={store}>
            <BrowserRouter>
                <SpeechContextProvider>
                    <ChakraProvider>
                        <App />
                    </ChakraProvider>
                </SpeechContextProvider>
            </BrowserRouter>
        </Provider>
    </ProfileContextProvider>
);
