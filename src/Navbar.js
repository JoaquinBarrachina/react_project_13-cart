import React from "react";
import { IoIosCart } from "react-icons/io";
//Global Context
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3>Use Reducer</h3>
        <div className="nav-container">
          <IoIosCart />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
