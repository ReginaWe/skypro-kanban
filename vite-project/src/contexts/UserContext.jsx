import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../AppRoutes";

export const UserContext = createContext(null);

const getUserFromLocalStorage = () => {
  const userInfo = localStorage.getItem("user");
  return userInfo ? JSON.parse(userInfo) : null;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const navigate = useNavigate();


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate(routePaths.LOGIN);
  };

  const setLogin = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const handleLogOut = () => {
    setUser("");
    localStorage.removeItem("user")
    navigate(routePaths.LOGIN);
  }

  return (
    <UserContext.Provider value={{ user, logout, setLogin, handleLogOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
