import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import SNavbar from "./MobileComponents/SNavbar";
function App() {
  return (
    <>
      <SNavbar />
      <Navbar />
    </>
  );
}

export default App;
