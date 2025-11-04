import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import DisplayList from "./components/DisplayList";
import { act, useState } from "react";

function App() {

  const [active, setActive] = useState("material");

  return (
    <div className="App1">
      <div>
        <Navbar />
      </div>
      <div className="side">
        <SideBar setActive={setActive}/>
      </div>

      <div className="display">
        <DisplayList active={active}/>
      </div>
    </div>
  );
}

export default App;
