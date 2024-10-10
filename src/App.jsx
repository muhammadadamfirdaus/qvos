import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Adam from "./components/Adam";
import Arvin from "./components/Arvin";
import Bayu from "./components/Bayu";
import Prana from "./components/Prana";

function App() {
  return (
    <>
      <div className="px-48">
        <div className="flex flex-wrap">
          <Adam />
          <Arvin />
          <Bayu />
          <Prana />
        </div>
      </div>
    </>
  );
}

export default App;
