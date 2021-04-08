import React from 'react';
import "./Box.css";

function Box({ height, width, backgroundColor }) {
  function handleClick() {

  }
  return (
    <div className="Box">
      <div style={{ height, width, backgroundColor }}></div>
      <button className="Box-button" onClick={handleClick}>Remove The Box!</button>
    </div>
  )
}

export default Box;