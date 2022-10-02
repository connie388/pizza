import React from "react";
import "../styles/app.css";

function Basket({ order, setOrder }) {
  const totalAmount = () => {
    let total = 0;

    for (var j = 0; j < order.length; j++) {
      total += parseFloat(order[j].amount);
      for (var i = 0; i < order[j].addOns.length; i++) {
        total += parseFloat(order[j].addOns[i].price);
      }
    }

    return total.toFixed(2);
  };
  let total = totalAmount();
  let gst = ((total * 13) / 100).toFixed(2);
  return (
    <div className="basket">
      <h1>Your Basket</h1>
      <div>{order.length} Items</div>
      {order.length === 0 ? (
        <p className="small-font weight-regular">
          Your basket looks a little empty. Just start adding food and we will
          automatically apply our most popular deals! You might be able to find
          better deals on our deals page though so remember to check there too!
        </p>
      ) : (
        <>
          {order.map((record, index) => {
            return (
              <div key={index}>
                <div className="inline-container">
                  <div className="regular-font weight-semi-bold left">
                    {record.name} {record.size}
                  </div>
                  <div className="regular-font weight-light right">
                    {record.amount}
                  </div>
                </div>
                {record.addOns &&
                  record.addOns.map((addOn) => {
                    return (
                      addOn.list &&
                      addOn.list.map((data, index) => {
                        return (
                          <div key={index} className="inline-container">
                            <div className="regular-font weight-light middle">
                              +{data}
                            </div>
                            <div className="regular-font weight-light right">
                              {addOn.price}
                            </div>
                          </div>
                        );
                      })
                    );
                  })}
              </div>
            );
          })}

          <div className="inline-container">
            <div className="regular-font weight-light left">Tax</div>
            <div className="regular-font weight-light right">{gst}</div>
          </div>
          <div className="inline-container">
            <div className="regular-font weight-light left">Total</div>
            <div className="regular-font weight-light right">{total}</div>
          </div>
        </>
      )}

      <p className="regular-font weight-semi-bold">
        Minimum spend for delivery is $10.00
      </p>
    </div>
  );
}

export default Basket;
