import { createContext, useState } from "react";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  const userInfo = localStorage.getItem("user");
  return userInfo ? JSON.parse(userInfo) : null;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const setLogin = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ user, logout, setLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
