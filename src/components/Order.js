import React from "react";
import Menu from "./Menu";
import Basket from "./Basket";

function Order({ item, setItem, order, setOrder, total, setTotal }) {
  return (
    <>
      <div className="row">
        <Menu item={item} order={order} setOrder={setOrder} />

        <div className="checkout">
          <Basket
            order={order}
            setOrder={setOrder}
            setItem={setItem}
            total={total}
            setTotal={setTotal}
          />
        </div>
      </div>

      <div className="hidden">
        <Basket
          order={order}
          setOrder={setOrder}
          setItem={setItem}
          total={total}
          setTotal={setTotal}
        />
      </div>
    </>
  );
}

export default Order;
