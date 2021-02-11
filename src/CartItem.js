import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({ id, title, img, price, amount }) => {
  const { remove, amountUp, amountDown } = useGlobalContext();
  return (
    <article>
      <img src={img} alt={title} />
      <h4>
        {id}º {title}
      </h4>
      <p>{price}€</p>
      <button className="btn" onClick={() => remove(id)}>
        Remove
      </button>

      <div>
        <button className="btn" onClick={() => amountUp(id)}>
          +
        </button>
        <p>{amount}</p>
        <button className="btn" onClick={() => amountDown(id)}>
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
