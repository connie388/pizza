import "./styles/app.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Order from "./components/Order";

function App() {
  const [item, setItem] = useState("home");
  return (
    <div className="App">
      <Navbar item={item} setItem={setItem} />
      <Order item={item} />
    </div>
  );
}

export default App;
