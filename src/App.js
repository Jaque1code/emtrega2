import {useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./Components/Barra.jsx";
import Home from "./Views/Home.jsx";
import Favoritos from "./Views/Favoritos.jsx";
import MiContexto from "./Context/MiContexto.jsx";

function App() {
  
  const [fotos, setFotos] = useState([])
  const estadoGlobal = {fotos, setFotos}


  async function obtenerDatos() {
       
    const res = await fetch('/data/fotos.json');
    const data = await res.json();


     setFotos(data.photos);
     const fotosProcesadas = data.photos.map((f) => {
       return {id:f.id, likes:f.likes, url:f.url}
     })
    
  }
   
  useEffect(() =>{ 
  
    obtenerDatos();
  }, []);

  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}> 
        <BrowserRouter> 
         <Barra></Barra>
         <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
         </Routes>
       </BrowserRouter> 
      </MiContexto.Provider> 
    </div>
  );
}

export default App;
