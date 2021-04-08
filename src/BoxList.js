import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBox(boxData) {
    let newBox = { ...boxData, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  function removeBox(id) {
    setBoxes(oldBoxes => oldBoxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <BoxForm create={renderBox} />
      <div>

        {boxes.map(({ height, width, color, id }) => (
          <Box
            key={id}
            height={`${height}px`}
            width={`${width}px`}
            backgroundColor={color}
            removeBox={() => removeBox(id)}
          />
        ))}

      </div>
    </div>)
}

export default BoxList;