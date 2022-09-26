import React from "react";
import "./Button.css";

function isOperator (value) {
  return isNaN(value) || value === "." || value === "=";
}

function Button(props) {
  return (
    <div className={`btnWrapper ${props.wrapperWidth}`}>
      <button 
      className= {`${isOperator(props.children) ? "btnWrapper__operator" : "btnWrapper__btn"} ${props.growParam}`}
      onClick = {() => props.handleClick(props.children)}
      >
        {props.children}</button>
    </div>
  )
}

export default Button;
