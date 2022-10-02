import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/sidebar.css";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Navbar({ item, setItem }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const changeActiveItem = (itemName) => {
    setItem(itemName);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={windowSize.innerWidth > 500 ? "scrollmenu" : "sidebar"}>
      <a
        href="#home"
        className={item === "deals" ? "active" : "navitem"}
        onClick={() => changeActiveItem("deals")}
      >
        Deals
      </a>
      <a
        href="#news"
        className={item === "pizzas" ? "active" : "navitem"}
        onClick={() => changeActiveItem("pizzas")}
      >
        Pizzas
      </a>
      <a
        href="#contact"
        className={item === "wings" ? "active" : "navitem"}
        onClick={() => changeActiveItem("wings")}
      >
        Wings
      </a>
      <a
        href="#about"
        className={item === "pastas" ? "active" : "navitem"}
        onClick={() => changeActiveItem("pastas")}
      >
        Pastas
      </a>
      <a
        href="#about"
        className={item === "sides" ? "active" : "navitem"}
        onClick={() => changeActiveItem("sides")}
      >
        Sides
      </a>
      <a
        href="#about"
        className={item === "desserts" ? "active" : "navitem"}
        onClick={() => changeActiveItem("desserts")}
      >
        Desserts
      </a>
      <a
        href="#about"
        name="drinks"
        className={item === "drinks" ? "active" : "navitem"}
        onClick={() => changeActiveItem("drinks")}
      >
        Drinks
      </a>
    </div>
  );
}

export default Navbar;
