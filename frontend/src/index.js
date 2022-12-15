import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SpeechContextProvider from './Contexts/SpeechContext';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";


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


