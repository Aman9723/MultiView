import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;

