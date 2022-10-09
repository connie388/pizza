import React, { useState } from "react";
import "../styles/collapsible.css";
import Toppings from "./Toppings";
import { Collapsible } from "../util/Collapsible";
import { RadioButton } from "../util/RadioButton";
import DisplayImageList from "./DisplayImageList";
import { sauces } from "../data/sauces";
import { addons } from "../data/addons";
import { cheese } from "../data/cheese";
import orderItem from "../util/orderItem";

function CustomizeItem({ order, setOrder, currentData, setCurrentData }) {
  const [checkedState, setCheckedState] = useState(
    Array.from({ length: addons.type.length }, () =>
      Array.from({ length: 100 }, () => false)
    )
  );

  function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName("input");

    for (let i = 0; i < ele.length; i++) {
      if (ele[i].type === "radio" || ele[i].type === "checkbox") {
        if (ele[i].checked)
          document.getElementById("result").innerHTML +=
            ele[i].name + " Value: " + ele[i].value + "<br>";
      }
    }
  }

  return (
    <div className="customize-parent-container">
      <div className="inline m-5">
        {currentData.image ? (
          <img
            className="customize-image"
            src={currentData.image}
            alt={currentData.name}
          />
        ) : (
          <></>
        )}
        <div>
          <h5>{currentData.name}</h5>
          <h6>{currentData.description}</h6>
        </div>
      </div>
      <div className="inline">
        {currentData.type.map((record, idx) => {
          return (
            <div className="detail-section">
              <div id={record.shape}>{record.size}</div>
              <div className="text-center small-font weight-semi-bold">
                {record.information}
              </div>
            </div>
          );
        })}
      </div>

      <Collapsible
        id="collapseDoughButton"
        target="#collapseDough"
        control="collapseDough"
        label="CHOOSE YOUR DOUGH"
        chosenId="chosen-dough"
      >
        <RadioButton
          index="regular-dough"
          name="dough"
          id="regular-dough"
          label="Regular"
          value="Regular"
          onChange={displayRadioValue}
        />
        <RadioButton
          index="whole-wheat"
          name="dough"
          id="whole-wheat"
          label="Whole Wheat"
          value="Whole Wheat"
          onChange={displayRadioValue}
        />
      </Collapsible>
      <Collapsible
        id="collapseCrustButton"
        target="#collapseCrust"
        control="collapseCrust"
        label="CHOOSE YOUR CRUST"
        chosenId="chosen-crust"
      >
        <RadioButton
          index="regular-crust"
          name="crust"
          id="regular-crust"
          label="Regular"
          value="Regular"
          onChange={displayRadioValue}
        />
        <RadioButton
          index="thin-crust"
          name="crust"
          id="thin-crust"
          label="Thin"
          value="Thin"
          onChange={displayRadioValue}
        />
        <RadioButton
          index="thick-crust"
          name="crust"
          id="thick-crust"
          label="Thick"
          value="Thick"
          onChange={displayRadioValue}
        />
      </Collapsible>
      <Collapsible
        id="collapseSauceButton"
        target="#collapseSauce"
        control="collapseSauce"
        label="CHOOSE YOUR SAUCE"
        chosenId="chosen-sauce"
      >
        <DisplayImageList
          dataList={sauces.list}
          radioButtonGroupName="sauce-group"
          onChange={displayRadioValue}
        />
      </Collapsible>
      <Collapsible
        id="collapseCheeseButton"
        target="#collapseCheese"
        control="collapseCheese"
        label="MOZZARELLA CHEESE"
        chosenId="chosen-cheese"
      >
        <DisplayImageList
          dataList={cheese.list}
          radioButtonGroupName="cheese-group"
          onChange={displayRadioValue}
        />
      </Collapsible>
      <Collapsible
        id="collapseToppingsButton"
        target="#collapseToppings"
        control="collapseToppings"
        label="CHOOSE YOUR TOPPINGS"
        chosenId="chosen-topping"
      >
        <div className="customize-toppings">
          <Toppings
            recordNo="000"
            checkedState={checkedState}
            setCheckedState={setCheckedState}
            toppings={addons.type}
          />
        </div>
      </Collapsible>
      <Collapsible
        id="collapseCookingButton"
        target="#collapseCooking"
        control="collapseCooking"
        label="WELL DONE or REGULAR"
        chosenId="chosen-cooking"
      >
        <RadioButton
          index="regular-cook"
          name="cook"
          id="regular-cook"
          label="Regular"
          value="Regular"
          onChange={displayRadioValue}
        />
        <RadioButton
          index="well-done"
          name="cook"
          id="well-done"
          label="Well Done"
          value="Well Done"
          onChange={displayRadioValue}
        />
      </Collapsible>
      <button
        id="select-button"
        type="submit"
        onClick={(e) => {
          orderItem("000", currentData, setCurrentData, order, setOrder);
        }}
        className="select-button"
      >
        SELECT
      </button>
    </div>
  );
}

export default CustomizeItem;
