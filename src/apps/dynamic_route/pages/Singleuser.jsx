import React from "react";
import { useParams } from "react-router-dom";
import { users } from "../assets/data";

function Singleuser() {
  const paramid = useParams();
  console.log(users[paramid.id]);
  return (
    <>
      <ul>
        <li>username: {users[paramid.id].name}</li>
        <li>age: {users[paramid.id].age}</li>
        <li>address: {users[paramid.id].address}</li>
      </ul>
    </>
  );
}

export default Singleuser;
