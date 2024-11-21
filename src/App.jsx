import { Routes, Route, Link } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./styles/global.scss";

import Home from "./views/Home";
import Adam from "./components/team/Adam";
import Arvin from "./components/team/Arvin";
import Bayu from "./components/team/Bayu";
import Prana from "./components/team/Prana";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adam" element={<Adam />} />
        <Route path="/arvin" element={<Arvin />} />
        <Route path="/bayu" element={<Bayu />} />
        <Route path="/prana" element={<Prana />} />
      </Routes>
    </>
  );
}

export default App;
