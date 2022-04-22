import React, { createContext, useContext, useState } from "react";

const authcontext = createContext();

function Auth({ children }) {
  //   const user = "saken";
  const [user, setUser] = useState();
  const login = (user) => {
    setUser(user);
    console.log(user)
  };
  return (
    <authcontext.Provider value={{ login }}>
      {children}
    </authcontext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authcontext);
};

export { Auth };
