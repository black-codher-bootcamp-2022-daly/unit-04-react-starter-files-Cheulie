import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import  { Nav }  from "./components/header";
import {Bookcase} from "./components/Bookcase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav />
    <App/>
      <Routes>
        <Route path="/" element={<h1>Tammy was here!!!! go to <Link to="/search" >search </Link></h1>}></Route>
        <Route path="/search" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
