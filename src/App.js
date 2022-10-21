import "./App.css";
import Home from "./components/home";
import Users from "./components/users";
import { Link, Route, Routes } from "react-router-dom";
import User2 from "./components/usersList/user2";
function App() {
  return (
    <>
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
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User2 />} />
      </Routes>
    </>
  );
}

export default App;
