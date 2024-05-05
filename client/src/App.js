import {useState, ustate} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [nombre,setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [pais,setPais] = useState("");
  const [edad,setEdad] = useState("");
  const [cargo,setCargo] = useState("");
  const [experiencia,setExperiencia] = useState("");
  
  const add = ()=>{
    axios.post('http://localhost:3001:create',{ 
      nombre:nombre,
      apellido:apellido,
      pais:pais,
      edad:edad,
      cargo:cargo,
      experiencia:experiencia
    })
    .then(()=>{
      alert('empleado registarado!');  
    })
    .catch(error =>{
      console.error('Hubo un error al registrar el empleado', error);
      alert('Hay problemas de comunicacion, favor srevisa la consola');
    });
  };
  

  return (
    <div className="App">
     <h1>Hola mundo!!</h1>
     <div className='datos'>
     <label>Nombre: <input 
          onChange={(event) => {
            setNombre(event.target.value)
          }}
          type="text"
        ></input></label>
         <label>Apellido: <input 
          onChange={(event) => {
            setApellido(event.target.value)
          }}
          type="text"
        ></input></label>
         <label>Pais: <input 
          onChange={(event) => {
            setPais(event.target.value)
          }}
          type="text"
        ></input></label>
         <label>Edad: <input 
          onChange={(event) => {
            setEdad(event.target.value)
          }}
          type="number"
        ></input></label>
         <label>Cargo: <input 
          onChange={(event) => {
            setCargo(event.target.value)
          }}
          type="text"
        ></input></label>
         <label>Experiencia: <input 
          onChange={(event) => {
            setExperiencia(event.target.value)
          }}
          type="number"
        ></input></label>
         <button onClick={add}>Registrar</button>
     </div>
    </div>
  );
}

export default App;
