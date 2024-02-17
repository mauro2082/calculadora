
import './App.css';
import logoCalculadora from './img/logoCalculadora.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';

import Button from './components/button';
import Pantalla from './components/pantalla';
import ButtonClear from './components/buttonClear';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val);
  };


  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input))
    } else{
      alert("Por favor ingresar un valor");
    };
    }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          src={logoCalculadora}
          className='logo-calculadora'
          alt='logo de calculadora' />
      </div>

      <div className='contenedor-principal'>
        <Pantalla
          input={input}
        />
        <div className='fila'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClear={() => setInput('')} />
        </div>
      </div>
    </div>
  );
}

export default App;
