import React from "react";
import { Link } from "react-router-dom";
import { users } from "../assets/data";

function Multipleusers() {
  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id}>
            <Link to={`${user.id}`}>
              <li user={user}>{user.name}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default Multipleusers;
