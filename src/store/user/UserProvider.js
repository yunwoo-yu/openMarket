import { useEffect, useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  localStorage.setItem("token", "zcxxcsacas");

  const userContext = {
    token,
    setToken,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
