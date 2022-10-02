import React, { useState } from "react";
import "../styles/app.css";
import "../styles/ribbon-corner.css";
import "../styles/image-button.css";
import { menuItems } from "./menuItems";
import { addons } from "./addons";

function Menu({ item, order, setOrder }) {
  const [menuItem, setMenuItem] = useState(null);

  const [checkedState, setCheckedState] = useState(
    new Array(addons.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  let json = {};
  switch (item) {
    case "pizzas":
      json = menuItems.pizzas;
      break;
    case "sandwiches":
      json = menuItems.sandwiches;
      break;
    case "pastas":
      json = menuItems.pastas;
      break;
    default:
      json = menuItems.pizzas;
  }

  function closeModal() {
    if (addons.type) {
      for (var j = 0; j < addons.type.length; j++) {
        var checkboxes = document.getElementsByName(addons.type[j].name);
        if (checkboxes && checkboxes.length > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
          }
        }
      }
    }
    document.querySelector(".modal").style.display = "none";
  }

  function openModal(name) {
    let titleElement = document.getElementById("modal-title");

    titleElement.innerText = 'FOR "' + name.toUpperCase() + '"';
    let parent = document.getElementById("content");

    for (var i = 0; i < addons.type.length; i++) {
      let addon = addons.type[i];
      let checked = document.getElementById(addon.name);
      if (!checked) {
        let div = document.createElement("div");
        let nameLabel = document.createElement("LABEL");
        nameLabel.id = addon.name;
        nameLabel.innerHTML = addon.name.toUpperCase() + " TOPPINGS";
        nameLabel.className = "regular-font weight-semi-bold green";
        div.appendChild(nameLabel);
        parent.append(div);

        for (var j = 0; j < addon.list.length; j++) {
          let list = addon.list[j];
          let div = document.createElement("div");
          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.id = "custom-checkbox-" + j;
          checkbox.name = addon.name;
          checkbox.value = list;
          checkbox.checked = checkedState[j];
          div.appendChild(checkbox);
          let checkboxLabel = document.createElement("LABEL");
          checkboxLabel.setAttribute("htmlFor", "custom-checkbox-" + j);
          checkboxLabel.innerHTML = list;
          checkboxLabel.className = "regular-font weight-light";
          div.appendChild(checkboxLabel);
          parent.appendChild(div);
          document
            .getElementById("custom-checkbox-" + j)
            .addEventListener("onChange", () => handleOnChange(j));
        }
      }
    }

    document.querySelector(".modal").style.display = "block";
  }

  function selectItem(data) {
    if (!data) data = menuItem;

    let selectElement = document.querySelector("#myList" + data.id);
    let output = selectElement.value;
    document.querySelector("#select-button" + data.id).textContent =
      "ADD $" + output;
  }

  function orderItem(data) {
    if (!data) data = menuItem;

    let addOnList = [];
    if (addons.type) {
      for (var j = 0; j < addons.type.length; j++) {
        let addon = addons.type[j];
        var checkboxes = document.getElementsByName(addon.name);
        if (checkboxes && checkboxes.length > 0) {
          let list = [];
          for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
              list.push(checkboxes[i].value);
            }
          }

          if (list.length > 0) {
            let data = {
              name: addon.name,
              price: addon.price,
              list: list,
            };
            addOnList.push(data);
          }
        }
      }

      let record = [];
      record.push({
        name: data.name,
        calory: data.calory,
        description: data.description,
        addOns: addOnList,
      });

      if (data.amount) {
        record[0].amount = data.amount;
      }

      if (data.type) {
        var select = document.getElementById("myList" + data.id);
        let index = select.selectedIndex;

        record[0].size = data.type[index].size;
        if (data.type[index].amount) record[0].amount = data.type[index].amount;
        record[0].information = data.type[index].information;
      }

      setOrder([...order, record[0]]);
    }
  }

  return (
    <div className="box">
      {json.map((data) => {
        return (
          <div key={data.id} className="menu-container parent">
            {data.hasOwnProperty("new") && data.new ? (
              <div className="ribbon regular-font weight-light">New</div>
            ) : (
              <></>
            )}
            <div className="image-container">
              <img className="menu-image" src={data.image} alt={data.name} />
              <button className="btn regular-font weight-light">
                Customize
              </button>
            </div>
            <div className="item">
              <div className="item-name">{data.name}</div>
              <div className="regular-font weight-light">{data.calory}</div>
              <div className="item-desc regular-font weight-light item-desc">
                {data.description}
              </div>
              <div>
                {data.addons ? (
                  <a
                    href="#"
                    className="regular-font weight-light"
                    onClick={(e) => {
                      setMenuItem(data);
                      openModal(data.name);
                    }}
                  >
                    Addons +
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div id="myModal" className="modal" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="div-btn-close">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => closeModal()}
                    ></button>
                  </div>
                  <div className="modal-header block-container">
                    <h5 className="modal-title">CHOOSE ADDONS</h5>

                    <div
                      id="modal-title"
                      className="regular-font weight-semi-bold"
                    ></div>
                  </div>
                  <div className="modal-body">
                    <div id="content"></div>
                  </div>
                  <div className="modal-footer">
                    <div>total</div>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => closeModal()}
                    >
                      Close
                    </button>
                    <button
                      id="add-to-cart"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setMenuItem(data);
                        orderItem();
                        closeModal();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {data.hasOwnProperty("type") ? (
              <select
                id={"myList" + data.id}
                className="dropdown"
                defaultValue={data.type[0]}
                onChange={(e) => {
                  setMenuItem(data);
                  selectItem(data);
                }}
              >
                {data.type.map((record, idx) => {
                  return (
                    <option key={idx} value={record.amount}>
                      {record.size} {record.information}
                    </option>
                  );
                })}
              </select>
            ) : (
              <></>
            )}
            <button
              id={"select-button" + data.id}
              type="submit"
              onClick={(e) => {
                setMenuItem(data);
                orderItem(data);
              }}
              className="select-button"
            >
              ADD{" "}
              {data.hasOwnProperty("type") ? data.type[0].amount : data.amount}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
