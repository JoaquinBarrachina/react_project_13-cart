import React from "react";

//Global Context
import { useGlobalContext } from "./context";

//Components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import "./App.css";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Cart Project</h1>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;
