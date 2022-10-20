import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Users from "./components/users";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
