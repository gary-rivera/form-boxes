import React from 'react';
import "./Box.css";

function Box({ height=50, width=50, backgroundColor='blue', removeBox }) {
  
  return (
    <div className="Box">
      <div style={{ height, width, backgroundColor }}></div>
      <button className="Box-button" onClick={removeBox}>Remove The Box!</button>
    </div>
  )
}

export default Box;