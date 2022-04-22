import React, { useContext, useState } from "react";
import { authcontext, useAuth } from "../config/Auth";

function Login() {
  const [user, setUser] = useState();
  const auth = useAuth()
  const handleLogin = () => {
    auth.user(user)
  };
  const handleChange = (e)=>{
    setUser(e.target.value)
  }
  return (
    <div>
        <label htmlFor="">Username</label>
        <input type="text" onChange={handleChange} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export { Login };
