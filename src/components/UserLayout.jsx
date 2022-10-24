import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./header";
import Title from "./title";

export default function UserLayout({ testState }) {
  return (
    <div>
      <h1>userList: {testState}</h1>
      <Link to="/users/1">User 1</Link>
      <br />
      <Link to="/users/2"> User2</Link>
      <br />
      <Link to="/users/new"> newUser</Link>
      <div style={{ borderStyle: "solid", borderColor: "red" }}>
        <Outlet />
      </div>
    </div>
  );
}
