import React, { useState } from "react";
import "../styles/app.css";
import "../styles/ribbon-corner.css";
import "../styles/image-button.css";
import { menuItems } from "./menuItems";
import { addons } from "./addons";
import Modal from "./Modal";

function Menu({ item, setItem, order, setOrder, setCustomizeNo }) {
  const [show, setShow] = useState(false); // for Modal
  const [selected, setSelected] = useState([]); // select list's choices
  const [itemNo, setItemNo] = useState(-1); // keep track of the record no that open the modal

  const showModal = (recordNo) => {
    setShow(true);
    setItemNo(recordNo);
  };

  const hideModal = () => {
    setShow(false);
    setItemNo(-1);
  };

  const getJson = () => {
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
    return json;
  };

  function selectItem(event, recordNo) {
    let copy = [...selected];
    copy[recordNo] = event.target.value;
    setSelected(copy); // update the state of select list

    let selectElement = document.querySelector("#myList" + recordNo);
    let output = selectElement.value;
    document.querySelector("#select-button" + recordNo).textContent =
      "ADD $" + output;
  }

  const customizeItem = (recordNo) => {
    setCustomizeNo(recordNo);
    setItem("customize");
  };

  function orderItem(e, recordNo) {
    let temp = document.getElementById("hiddenInput" + recordNo);
    let data = JSON.parse(temp.value);

    let addOnList = [];
    if (addons.type) {
      for (var j = 0; j < addons.type.length; j++) {
        let addon = addons.type[j];
        var checkboxes = document.getElementsByName(
          recordNo + "-" + addon.name
        );
        if (checkboxes && checkboxes.length > 0) {
          let list = [];
          for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
              list.push(checkboxes[i].value);
            }
          }

          if (list.length > 0) {
            let listData = {
              name: addon.name,
              price: addon.price,
              list: list,
            };
            addOnList.push(listData);
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
        var select = document.getElementById("myList" + recordNo);
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
      {getJson().map((data, recordNo) => {
        return (
          <div key={recordNo} className="menu-container parent">
            <input
              id={"hiddenInput" + recordNo}
              value={JSON.stringify(data)}
              type="hidden"
            />
            {data.hasOwnProperty("new") && data.new ? (
              <div className="ribbon regular-font weight-light">New</div>
            ) : (
              <></>
            )}
            <div className="image-container">
              <img
                className="menu-image"
                src={data.image}
                alt={data.name}
                onClick={(e) => {
                  customizeItem(recordNo);
                }}
              />
              <p className="customize regular-font weight-light">Customize</p>
            </div>

            <div className="item">
              <div id="data-name" className="item-name">
                {data.name}
              </div>
              <div id="data-calory" className="regular-font weight-light">
                {data.calory}
              </div>
              <div
                id="data-description"
                className="item-desc regular-font weight-light item-desc"
              >
                {data.description}
              </div>
              <div>
                {data.addons ? (
                  <a
                    href="#"
                    className="regular-font weight-light"
                    onClick={(e) => {
                      showModal(recordNo);
                    }}
                  >
                    Addons +
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {data.addons ? (
              <Modal
                show={show}
                handleClose={hideModal}
                orderItem={orderItem}
                selectedItem={data.name}
                recordNo={itemNo} // need to use itemNo otherwise always the largest index
              ></Modal>
            ) : (
              <></>
            )}
            {data.hasOwnProperty("type") ? (
              <select
                id={"myList" + recordNo}
                className="dropdown"
                value={selected[recordNo]}
                onChange={(e) => {
                  selectItem(e, recordNo);
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
              id={"select-button" + recordNo}
              type="submit"
              onClick={(e) => {
                orderItem(e, recordNo);
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
