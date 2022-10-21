import React from "react";
import { Link } from "react-router-dom";
import User3 from "../components/usersList/user3";
export default function Users() {
  const users = [
    { name: "john", age: 25, sex: "male" },
    { name: "lili", age: 25, sex: "female" },
  ];
  console.log(users[0].name);
  return (
    <div>
      users list
      <Link to="/users/'${users[0].name}">User1</Link>
      <Link to="/users/2">User2</Link>
    </div>
  );
}
