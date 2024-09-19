import React, { createContext, useContext, useEffect, useState } from "react";
import { checkAuthState, auth, getCurrentUser, getCurrentUserData } from "../library/firebaseConfig";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = checkAuthState((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();

  }, []);

  
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        userdata,
        setUserData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
