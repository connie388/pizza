import "../styles/modal.css";
import { addons } from "./addons";
import { useState } from "react";

function Modal({ handleClose, show, orderItem, selectedItem, recordNo }) {
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: addons.type.length }, () =>
      Array.from({ length: 100 }, () => false)
    )
  );

  const showHideClassName = show ? "modal display-block" : "modal display-none";
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
    let arr = Array.from({ length: addons.type.length }, () =>
      Array.from({ length: 100 }, () => false)
    );

    setCheckedState(arr);
    handleClose();
  }

  const handleOnChange = (row, column, event) => {
    let copy = [...checkedState];
    copy[row][column] = event.target.checked;
    setCheckedState(copy);
  };

  return (
    <div id={"myModal" + recordNo} className={showHideClassName} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="div-btn-close">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-header block-container">
            <h5 className="modal-title">CHOOSE ADDONS</h5>
            <div id="modal-title" className="regular-font weight-semi-bold">
              FOR "{selectedItem.toUpperCase()}"
            </div>
          </div>
          <div className="modal-body">
            <div id={"content" + recordNo}>
              {addons.type.map((addon, index) => {
                return (
                  <div key={"type" + addon.name}>
                    <label
                      id={"type" + addon.name}
                      className="regular-font weight-semi-bold green"
                    >
                      {addon.name.toUpperCase() + " TOPPINGS"}
                    </label>
                    {addon.list.map((list, j) => {
                      return (
                        <div key={addon.name + j}>
                          <input
                            type="checkbox"
                            id={recordNo + "checkbox-" + addon.name + j}
                            name={recordNo + "-" + addon.name}
                            value={list}
                            checked={checkedState[index][j]}
                            onChange={(e) => handleOnChange(index, j, e)}
                          />
                          <label
                            htmlFor={recordNo + "checkbox-" + addon.name + j}
                            className="regular-font weight-light"
                          >
                            {list}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              id="add-to-cart"
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                orderItem(e, recordNo);
                closeModal();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
