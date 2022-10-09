import React, { useState } from "react";
import { RadioButton } from "../util/RadioButton";

function DisplayImageList({ dataList, radioButtonGroupName, onChange }) {
  const [selected, setSelected] = useState();

  return (
    <div className="box">
      {dataList?.map((data, i) => {
        return (
          <div
            key={i}
            className={
              selected === data.name
                ? "sauce-box inline selected"
                : "sauce-box inline"
            }
            onClick={(e) => setSelected(data.name)}
          >
            {data.image ? (
              <img className="sauce-image" src={data.image} alt={data.name} />
            ) : (
              <></>
            )}
            <div>
              <div className="detail-section">
                <div className="large-font weight-semi-bold">{data.name}</div>
                <div>
                  {data.type ? (
                    <div className="inline">
                      {data.type.map((type, index) => {
                        return (
                          <p key={index} className="small-font weight-light">
                            <RadioButton
                              border="false"
                              index={index}
                              name={radioButtonGroupName}
                              id={type}
                              label={type}
                              value={type}
                              class="none"
                              onChange={onChange}
                            />
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayImageList;
