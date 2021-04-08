import React, { useState } from 'react';

/**
 * Props:
 *  - create function 
 * State:
 *  - formData
 */
const initialState = {
  width: "",
  height: "",
  color: ""
};

function NewBoxForm({ create }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    
    setFormData( fData => ({...fData, [name]: value }));
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();

    create(formData);
    setFormData(initialState);
  }

  return (
  <div>
    <form onSubmit={handleSubmit}> 
      <label htmlFor="height">Height</label> 
      <input id="height" 
        onChange={handleChange} 
        name="height" 
        value={formData.height}/>

      <label htmlFor="width">Width</label> 
      <input id="width" 
        onChange={handleChange} 
        name="width" 
        value={formData.width}/>

      <label htmlFor="color">Color</label> 
      <input id="color" 
        onChange={handleChange} 
        name="color"
        value={formData.color}/>
      <button>Add box</button>
    </form>
  </div>
  );
}

export default NewBoxForm;