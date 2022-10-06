import React from "react";

function CustomizeItem({ customizeNo, order, setOrder }) {
  return (
    <div>
      <div>{customizeNo}</div>
      <div>{JSON.stringify(order)}</div>
    </div>
  );
}

export default CustomizeItem;
