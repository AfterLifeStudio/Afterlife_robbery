import { React, useState } from "react";
import { nuicallback } from "../../utils/nuicallback";

const Button = (data) => {
  const handleinput = (state, option) => {
    nuicallback("settings", { option: option, value: state });
  };

  return (
    <>
      <div className="option">
        <div className="option-name">
        <span class="material-symbols-outlined">{data.icon}</span>
          <div>
            <div className="option-title">{data.title}</div>
            <div className="option-description">{data.description}</div>
          </div>
        </div>
        <div className="select-value">
          <div
            className="option-button-text"
            style={{ opacity: data.value ? "100%" : "70%" }}
          >
            {data.value ? "on" : "off"}
          </div>
          <div
            style={{ justifyContent: data.value ? "end" : "start" }}
            onClick={() => handleinput(data.value ? false : true, data.name)}
            className="option-button"
          >
            <div style={{ opacity: data.value ? "100%" : "50%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
