import React from 'react';

import '../Stylesheets/buttonClear.css'



const ButtonClaer = (props) =>(
  <button className='button-clear'
  onClick={props.manejarClear}>
    LIMPIAR
  </button>
);

export default ButtonClaer;