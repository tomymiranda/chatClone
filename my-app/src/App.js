import './App.css';
import { useState } from "react";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  //input es la entrada del state, setInput es la q modifca el state
  const [input,setInput] =  useState('');
  //en este state se almacenan los mensajes enviados
  const [messages,setMessage] = useState([]);
  
  console.log(input);
  console.log(messages);

  const functionSendMessage = (event) => {
    event.preventDefault()
    //se agrega input sin perder lo q habia hasta el momento en el state message(q es un array)  
    setMessage([...messages,input])
    //se limpia el input
    setInput('')
  }

  return (
    <div className="App">

      <h1>Hola Perris</h1>
      
      <form>
          <input value /*muestra el valor inicial*/={input}/*en este caso el state*/ onChange = {event => setInput(event.target.value)} /*{event} no porq le tengo q pasar la funcion exacta*/ ></input>
          <Button variant="contained" type = 'submit' onClick = {functionSendMessage} >Enviar Mensaje</Button>
      </form>
      {}
      {
        //se recorre el state de message y se muestra su contenido
        messages.map(message =>(
          <p>{message}</p>
        ))
      }
    
    </div>
  );
}

export default App;