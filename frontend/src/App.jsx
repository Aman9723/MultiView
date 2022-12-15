import SpeechRecog from './components/SpeechRecog';
import React from 'react';
import { SpeechContext } from './contexts/SpeechContext';
import AllPages from './pages/AllPages';

function App() {
    const { speech } = React.useContext(SpeechContext);
    return (
        <>
            <AllPages />
            {/* <SpeechRecog /> */}
        </>
    );
}

export default App;
