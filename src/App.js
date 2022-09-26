import React, {useState} from "react";
import './App.css';
import Button from "./components/Button.js";
import Input from "./components/Input.js"
import * as math from "mathjs";

function App() {

  const [inputValue, setInputValue] = useState("");

  function addToInput (value) {
    setInputValue(inputValue + value)
  }

  function evaluateExpression () {
    setInputValue(math.evaluate(inputValue))
  }

  function clearInput () {
    setInputValue("");
  }

  function delOneSimbolFromInput () {
    setInputValue(inputValue.substring(0, inputValue.length - 1))
  }

  function changePositiveNegative () {
    
    if (Math.sign(inputValue) === 1) {
      setInputValue(inputValue * -1)
      console.log(2);
    } else {
      console.log(1);
      setInputValue(inputValue * -1)
    }
  }

  return (
    <div className="calcWrapper">     

      <div className="calcWrapper__row">
        <Button handleClick = {() => changePositiveNegative()}>+/-</Button>
        <Button handleClick = {addToInput}>0</Button>
        <Button handleClick = {addToInput}>.</Button>
        <Button handleClick = {() => evaluateExpression()}>=</Button>
      </div>

      <div className="calcWrapper__row">
        <Button handleClick = {addToInput}>1</Button>
        <Button handleClick = {addToInput}>2</Button>
        <Button handleClick = {addToInput}>3</Button>
        <Button handleClick = {addToInput}>+</Button>
      </div>

      <div className="calcWrapper__row">
        <Button handleClick = {addToInput}>4</Button>
        <Button handleClick = {addToInput}>5</Button>
        <Button handleClick = {addToInput}>6</Button>
        <Button handleClick = {addToInput}>-</Button>
      </div>

      <div className="calcWrapper__row">
        <Button handleClick = {addToInput}>7</Button>
        <Button handleClick = {addToInput}>8</Button>
        <Button handleClick = {addToInput}>9</Button>
        <Button handleClick = {addToInput}>*</Button>
      </div>

      <div className="calcWrapper__row">   
        <Button handleClick = {() => delOneSimbolFromInput()}>del</Button>
        <Button handleClick = {addToInput}>%</Button>    
        <Button handleClick = {addToInput}>^</Button>        
        <Button handleClick = {addToInput}>/</Button>
      </div>

      <div className="calcWrapper__row">                
        <Button wrapperWidth= {"newWidth"} growParam= {"flex-grow"} handleClick = {() => clearInput()}>CE</Button>
      </div> 

      <div className="calcWrapper__row">
        <Input>{inputValue}</Input>
      </div>
    </div>
  );
}

export default App;
