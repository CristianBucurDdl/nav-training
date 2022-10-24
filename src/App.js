import "./App.css";
import Home from "./components/home";
import Users from "./components/users";
import { Link, Route, Routes } from "react-router-dom";
import User2 from "./components/usersList/user2";
import UserLayout from "./components/UserLayout";
import Header from "./components/header";
import Title from "./components/title";
import { useEffect, useState } from "react";
export function CalcButton({ state, setState }) {
  return (
    <button
      onClick={() => {
        setState(state + 1);
      }}
    >
      calc :{state}
    </button>
  );
}
function App() {
  const [state, setState] = useState(1);
  const testState = "testState";
  const NewUser = ({ testState }) => {
    return <h1>new user: {testState}</h1>;
  };

  return (
    <>
      <Header />
      <Title />
      <CalcButton state={state} setState={setState} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home state={state} />} />

        <Route path="/users" element={<UserLayout testState={testState} />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<User2 testState={testState} />} />
          <Route path="new" element={<NewUser testState={testState} />} />
        </Route>
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
