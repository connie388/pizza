import React, { useEffect } from "react";
import "../styles/app.css";

function Basket({ order, setOrder, item, setItem, total, setTotal }) {
  function removeThisItem(index) {
    let newArr = order.filter((d, i) => index !== i);
    setOrder(newArr);
  }

  useEffect(() => {
    let amt = 0;

    for (var j = 0; j < order.length; j++) {
      amt += parseFloat(order[j].amount);
      for (var i = 0; i < order[j].addOns.length; i++) {
        amt += parseFloat(order[j].addOns[i].price);
      }
    }
    setTotal(amt.toFixed(2));
  }, [order, setTotal]);

  return (
    <div className="basket">
      <h4>My Cart</h4>
      <div>
        <i className="cart fa fa-shopping-cart"></i>{" "}
        <b>{order.length === 0 ? "Empty Cart" : order.length}</b>
      </div>
      {order.length === 0 ? (
        <p className="small-font weight-regular">
          Your basket looks a little empty. Just start adding food and we will
          automatically apply our most popular deals! You might be able to find
          better deals on our deals page though so remember to check there too!
        </p>
      ) : (
        <>
          <div className="content-section">
            {order.map((record, index) => {
              return (
                <div key={index}>
                  <div className="inline">
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => {
                        removeThisItem(index);
                      }}
                    />
                    <div className="regular-font weight-semi-bold left">
                      {record.name} {record.size}
                    </div>
                    <div className="regular-font weight-light right">
                      {parseFloat(record.amount).toFixed(2)}
                    </div>
                  </div>
                  {record.addOns &&
                    record.addOns.map((addOn) => {
                      return (
                        addOn.list &&
                        addOn.list.map((data, index) => {
                          return (
                            <div key={index} className="inline">
                              <div className="regular-font weight-light middle">
                                +{data}
                              </div>
                              <div className="regular-font weight-light right">
                                {addOn.price.toFixed(2)}
                              </div>
                            </div>
                          );
                        })
                      );
                    })}
                </div>
              );
            })}
          </div>
          <div className="total-section">
            <div className="inline">
              <div className="regular-font weight-light left">Sub-total</div>
              <div className="regular-font weight-light right">{total}</div>
            </div>
            <div className="inline">
              <div className="regular-font weight-light left">Tax</div>
              <div className="regular-font weight-light right">
                {((total * 13) / 100).toFixed(2)}
              </div>
            </div>
            <div className="inline">
              <div className="regular-font weight-light left">Total</div>
              <div className="regular-font weight-light right">
                {((total * 113) / 100).toFixed(2)}
              </div>
            </div>
            <p className="regular-font weight-semi-bold">
              Minimum spend for delivery is $10.00
            </p>
            {item === "checkout" ? (
              <></>
            ) : (
              <button
                type="submit"
                onClick={(e) => {
                  setItem("checkout");
                }}
                className="select-button"
              >
                CHECK OUT
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;
