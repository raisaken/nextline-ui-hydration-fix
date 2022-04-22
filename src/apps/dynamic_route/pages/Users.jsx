import React from "react";
import { Link, Outlet } from "react-router-dom";
import { users } from "../assets/data";

function Users() {
  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <Link to={`${user.id}`}>
              {/* {console.log(`${user.id}`)} */}
              <li user={user}>{user.name}</li>
            </Link>
          </ul>
        );
      })}
      {/* <Outlet/> */}
    </div>
  );
}

export default Users;
