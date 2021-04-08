import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBox(boxData) {
    let newBox = { ...boxData, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function renderBoxes() {
    return (
      <div>
        {boxes.map(({height, width, backgroundColor}) =>(
          <Box height={height} width={width} backgroundColor={backgroundColor}/>
        ))}
      </div>
    )
  }

  return (
    <div>
      <BoxForm create={renderBox} />
      <div>
        {renderBoxes}
      </div>
    </div>)
}

export default BoxList;