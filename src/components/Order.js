import React from "react";
import Menu from "./Menu";
import Basket from "./Basket";
import CustomizeItem from "./CustomizeItem";

function Order({
  item,
  setItem,
  order,
  setOrder,
  total,
  setTotal,
  customizeNo,
  setCustomizeNo,
}) {
  return (
    <>
      {item === "customize" ? (
        <CustomizeItem
          customizeNo={customizeNo}
          order={order}
          setOrder={setOrder}
        />
      ) : (
        <>
          <div className="row">
            <Menu
              item={item}
              setItem={setItem}
              order={order}
              setOrder={setOrder}
              setCustomizeNo={setCustomizeNo}
            />

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
      )}
    </>
  );
}

export default Order;
