import React from "react";
import useForm from "../hooks/useForm";
import "../styles/checkout.css";
import Basket from "./Basket";

// const Checkbox = ({ name, label, value, onChange }) => {
//   return (
//     <label>
//       <input name={name} type="checkbox" checked={value} onChange={onChange} />
//       {label}
//     </label>
//   );
// };

const TextField = ({
  name,
  icon,
  label,
  type,
  onChange,
  id,
  value,
  placeholder,
  pattern,
  inputMode,
}) => {
  return (
    <>
      <label htmlFor={name}>
        {icon} {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        pattern={pattern}
        inputMode={inputMode}
        required
      />
    </>
  );
};

function CheckOut({ order, setOrder, item, setItem, total, setTotal }) {
  //Final submit function
  // const formLogin = () => {
  //   console.log("Callback function when form is submitted!");
  //   console.log("Form Values ", inputs);
  //   console.log("errors=" + JSON.stringify(errors));
  // };
  //Custom hook call
  const { handleChange, inputs, errors, handleSubmit } = useForm(
    { checkboxItem: false }
    // ,
    // formLogin
  );

  return (
    <div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-50">
                  <h3>Shipping Address</h3>

                  <TextField
                    name="username"
                    icon={<i className="fa fa-user"></i>}
                    label="Full Name"
                    type="text"
                    onChange={handleChange}
                    id="username"
                    value={inputs.username}
                  />
                  <TextField
                    name="email"
                    icon={<i className="fa fa-envelope"></i>}
                    label="Email"
                    type="email"
                    inputMode="email"
                    onChange={handleChange}
                    pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                    id="email"
                    value={inputs.email}
                  />
                  {errors.email && (
                    <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                      {errors.email}
                    </div>
                  )}

                  <TextField
                    name="phone"
                    icon={<i className="fa fa-phone"></i>}
                    label="Mobile"
                    type="text"
                    onChange={handleChange}
                    inputMode="tel"
                    id="phone"
                    value={inputs.phone}
                    pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                  />
                  {errors.phone && (
                    <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                      {errors.phone}
                    </div>
                  )}
                  <TextField
                    name="address"
                    icon={<i className="fa fa-address-card-o"></i>}
                    label="Address"
                    type="text"
                    onChange={handleChange}
                    id="adr"
                    value={inputs.address}
                  />
                  <TextField
                    name="city"
                    icon={<i className="fa fa-institution"></i>}
                    label="City"
                    type="text"
                    onChange={handleChange}
                    id="city"
                    value={inputs.city}
                  />

                  <div className="row">
                    <div className="col-50">
                      <TextField
                        name="province"
                        label="Province"
                        type="text"
                        onChange={handleChange}
                        id="province"
                        value={inputs.province}
                      />
                    </div>
                    <div className="col-50">
                      <TextField
                        name="postalcd"
                        label="Postal Code"
                        type="text"
                        onChange={handleChange}
                        id="postalcd"
                        value={inputs.postalcd}
                        pattern="^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$"
                      />
                    </div>
                    {errors.postalcd && (
                      <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        {errors.postalcd}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="visa fa fa-cc-visa"></i>
                    <i className="amex fa fa-cc-amex"></i>
                    <i className="mastercard fa fa-cc-mastercard"></i>
                    <i className="discover fa fa-cc-discover"></i>
                  </div>
                  <TextField
                    name="cardname"
                    label="Name on Card"
                    type="text"
                    onChange={handleChange}
                    id="cname"
                    value={inputs.cardname}
                  />
                  <TextField
                    name="cardnumber"
                    label="Credit card number"
                    type="text"
                    onChange={handleChange}
                    id="ccnum"
                    value={inputs.cardnumber}
                  />
                  {errors.cardnumber && (
                    <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                      {errors.cardnumber}
                    </div>
                  )}
                  <div className="row">
                    <div className="col-50">
                      <TextField
                        name="expdate"
                        label="Expire Date"
                        type="month"
                        onChange={handleChange}
                        id="expdate"
                        value={inputs.expdate}
                      />
                      {errors.expdate && (
                        <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                          {errors.expdate}
                        </div>
                      )}
                    </div>
                    <div className="col-50">
                      <TextField
                        name="cvv"
                        label="CVV"
                        type="text"
                        onChange={handleChange}
                        inputMode="decimal"
                        id="cvv"
                        pattern="^[0-9]{3,4}$"
                        value={inputs.cvv}
                      />
                    </div>
                    {errors.cvv && (
                      <div role="alert" style={{ color: "rgb(255, 0, 0)" }}>
                        {errors.cvv}
                      </div>
                    )}
                  </div>
                  {/* <h3>Delivery Time</h3> */}
                  <div className="row">
                    <div className="col-50">
                      <TextField
                        name="deliverytime"
                        icon={<i className="fa fa-clock-o"></i>}
                        label="Delivery Time"
                        type="time"
                        onChange={handleChange}
                        id="deliverytime"
                        value={inputs.deliverytime}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <Checkbox
                name="checkboxItem"
                label="Shipping address same as billing"
                value={inputs.checkboxItem}
                onChange={handleChange}
              /> */}
              <div>
                By placing your order, you agree to our terms & conditions and
                privacy policy.
              </div>
              <input
                type="submit"
                value={"Place Your Order " + total}
                className="btn"
              />
            </form>
          </div>
        </div>

        <div className="col-25">
          <Basket
            order={order}
            setOrder={setOrder}
            item={item}
            setItem={setItem}
            total={total}
            setTotal={setTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
