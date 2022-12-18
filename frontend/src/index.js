import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SpeechContextProvider from './Context/SpeechContext';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProfileContextProvider from './Context/ProfileContext';
import AppContextProvider from "./Context/AppContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProfileContextProvider>
        <Provider store={store}>
            <BrowserRouter>
                <SpeechContextProvider>
                    <ChakraProvider>
                    <AppContextProvider>
                        <App />
                        </AppContextProvider>
                    </ChakraProvider>

                </SpeechContextProvider>
            </BrowserRouter>
        </Provider>
    </ProfileContextProvider>
);
