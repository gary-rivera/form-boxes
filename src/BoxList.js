import React, { useState } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import {v4 as uuid } from 'uuid';

function BoxList() {
  return  (
  <div> 
    <Box />
    <BoxForm />
  </div> )
}

export default BoxList;