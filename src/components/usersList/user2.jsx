import React from "react";
import { useParams } from "react-router-dom";

export default function User2({ testState }) {
  const { id } = useParams();
  return (
    <div>
      User {id} + {testState}
    </div>
  );
}
