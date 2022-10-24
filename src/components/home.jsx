import React from "react";
import { CalcButton } from "../App";
export default function home({ state, setState }) {
  return (
    <div>
      home current state is :{state}
      <br />
      <CalcButton state={state} setState={setState} />
    </div>
  );
}
