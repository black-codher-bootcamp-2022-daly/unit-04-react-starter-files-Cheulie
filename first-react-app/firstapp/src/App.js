import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./NavBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  const [nameToShow, setNameToShow] = React.useState('Tobia')

  const tobia = (
    <Header
      className="header-tobia"
      name="Tobia"
      color="blue"
      fruit="blueberry"
    />
  );

  const tanya = <Header name="Tanya" color="orange" fruit="orange" />;

  return (
    <div className="App">
      <NavBar>
        <li>Homepage</li>
        <li>About</li>
        <li><button onClick={() => setNameToShow("Tanya")}>Show Tanya</button></li>
        <li><button onClick={() => setNameToShow("Tobia")}>Show Tobia</button></li>
      </NavBar>
      {nameToShow === "Tobia" ? tobia : tanya}
      <Footer nickname="Jimy" />
    </div>
  );
}

export { App, Header, Footer };