import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [data, setData] = useState({ email: "" });
  const [otp, setOtp] = useState();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider
      value={{ data, setData, isLogin, setIsLogin, otp, setOtp }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
