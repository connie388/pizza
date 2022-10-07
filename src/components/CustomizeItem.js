import React from "react";
import "../styles/collapsible.css";
import { Collapsible } from "../util/Collapsible";

function CustomizeItem({ customizeNo, order, setOrder }) {
  return (
    <div>
      {/* <div>
        <button
          id="collapseDoughButton"
          class="btn btn-primary menu-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseDough"
          aria-expanded="false"
          aria-controls="collapseDough"
        >
          Choose Your Dough <div id="dough-chosen"></div>
        </button>
      </div>
      <div
        className="collapse text-dark"
        id="collapseDough"
        aria-expanded="false"
      >
        <div className="collapsible-container">
          <input type="radio" id="regular" name="dough" value="Regular" />
          <label for="html">Regular</label>
          <input
            type="radio"
            id="wholewheat"
            name="dough"
            value="Whole Wheat"
          />
          <label for="wholewheat">Whole Wheat</label>
        </div>
      </div> */}
      <Collapsible
        id="collapseDoughButton"
        target="#collapseDough"
        control="collapseDough"
        label="CHOOSE YOUR DOUGH"
        chosenId="chosen-dough"
      >
        <input type="radio" id="regular-dough" name="dough" value="Regular" />
        <label htmlFor="regular-dough">Regular</label>
        <input type="radio" id="whole-wheat" name="dough" value="Whole Wheat" />
        <label htmlFor="whole-wheat">Whole Wheat</label>
      </Collapsible>
      <Collapsible
        id="collapseCrustButton"
        target="#collapseCrust"
        control="collapseCrust"
        label="CHOOSE YOUR CRUST"
        chosenId="chosen-crust"
      >
        <input type="radio" id="regular-crust" name="crust" value="Regular" />
        <label htmlFor="regular-crust">Regular</label>
        <input type="radio" id="thin-crust" name="crust" value="Thin" />
        <label htmlFor="thin-crust">Thin</label>
        <input type="radio" id="thick-crust" name="crust" value="Thick" />
        <label htmlFor="thick-crust">Thick</label>
      </Collapsible>
      <Collapsible
        id="collapseSauceButton"
        target="#collapseSauce"
        control="collapseSauce"
        label="CHOOSE YOUR SAUCE"
        chosenId="chosen-sauce"
      >
        <div>
          Classic tomato sauce Herbed Olive Oil (White Pizza) Pesto SAUCE BBQ
          SAUCE NO SAUCE
        </div>
      </Collapsible>
      <Collapsible
        id="collapseCheeseButton"
        target="#collapseCheese"
        control="collapseCheese"
        label="MOZZARELLA CHEESE"
        chosenId="chosen-cheese"
      >
        <div>
          REGULAR MOZZARELLA EASY ON CHEESE DAIYA DAIRY FREE MOZZARELLA STYLE
          SHREDS NO CHEESE
        </div>
      </Collapsible>
      <Collapsible
        id="collapseToppingsButton"
        target="#collapseToppings"
        control="collapseToppings"
        label="CHOOSE YOUR TOPPINGS"
        chosenId="chosen-topping"
      >
        <div></div>
      </Collapsible>
      <Collapsible
        id="collapseCookingButton"
        target="#collapseCooking"
        control="collapseCooking"
        label="WELL DONE or REGULAR"
        chosenId="chosen-cooking"
      >
        <input type="radio" id="regular-cooking" name="cook" value="Regular" />
        <label htmlFor="regular-cooking">Regular</label>
        <input type="radio" id="well-done" name="cook" value="Well Done" />
        <label htmlFor="well-done">Well Done</label>
      </Collapsible>
    </div>
  );
}

export default CustomizeItem;
