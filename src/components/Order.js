import React, { useState } from "react";
import Menu from "./Menu";
import Basket from "./Basket";

function Order({ item }) {
  const [order, setOrder] = useState([]);

  return (
    <>
      <div className="inline-container">
        <Menu item={item} order={order} setOrder={setOrder} />
        <div className="checkout">
          <Basket order={order} setOrder={setOrder} />
        </div>
      </div>
      <div className="hidden">
        <Basket order={order} setOrder={setOrder} />
      </div>
    </>
  );
}

export default Order;
