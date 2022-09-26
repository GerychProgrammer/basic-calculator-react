import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="inputWrapper">
      <input
        className="inputWrapper__input"
        value={props.children}
        placeholder = "0"
        type="text"
      />
    </div>
  );
}

export default Input;
