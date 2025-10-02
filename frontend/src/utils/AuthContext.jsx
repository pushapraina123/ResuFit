import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Get values from localStorage
  const login = localStorage.getItem("isLogin");
  const userInfoData = localStorage.getItem("userInfo");

  // Initialize state correctly
  const [isLogin, setLogin] = useState(login ? JSON.parse(login) : false);
  const [userInfo, setUserInfo] = useState(userInfoData ? JSON.parse(userInfoData) : null);

  return (
    <AuthContext.Provider value={{ isLogin, setLogin, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
