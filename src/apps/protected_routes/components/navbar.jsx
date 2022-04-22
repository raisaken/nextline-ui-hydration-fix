import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const handlesignin = () => {
    setUser({ name: "suraj" });
    console.log(user);
  };

  const handlesignout = () => {
    setUser(null);
    console.log(user);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      {user ? (
        <>
          <Link to="dashboard">Dashboard</Link>
          <Link to="profile">Profile</Link>
          <button onClick={handlesignout}>Signout</button>
        </>
      ) : (
        <button onClick={handlesignin}>Signin</button>
      )}
    </div>
  );
}

export default Navbar;
