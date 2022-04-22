import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{marginLeft:"50px"}}>
      <h1>Apps</h1>
      <Link to="users">Dynamic routes</Link><br />
      <Link to="protectedroutes">Protected routes</Link> <br />
      <Link to="counter">Redux Counter</Link>
    </div>
  );
}

export default Home;
