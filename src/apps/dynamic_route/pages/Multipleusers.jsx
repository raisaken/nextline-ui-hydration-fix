import React from "react";
import { users } from "../assets/data";

function Multipleusers() {
  return (
    <div>
      {users.map((user) => {
        return (
          <ul>
            <li id={user.id}>{user.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default Multipleusers;
