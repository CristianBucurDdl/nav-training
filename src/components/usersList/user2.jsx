import React from "react";
import { useParams } from "react-router-dom";

export default function User2() {
  const { id } = useParams();
  return <div>User {id}</div>;
}
