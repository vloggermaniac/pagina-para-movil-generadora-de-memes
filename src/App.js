/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

/* primero se ponen las ideas y estructura del proyecto*/ 
   
     /*Select picker de memes <select>
     //Input Text - primer linea <input type="text"/>
     //Input Text - segunda linea  <input type="text"/>
     //Boton exportar <button>Exportar</button> 
     estructura del meme <div>*/
function App() {
// para que lo que sescriba en linea  pase al meme creamos un estado
//dentro del argumento una variable y una funcion que cambie esa variable

  const [linea1, setLinea1] = useState ();
  const [linea2, setLinea2] = useState ();
  //se guarda la funcion en el estado para la imagen
  const [imagen, setImagen] = useState ();
// (evento.target.value) el camino que sigo el input, setLinea1 renderiza el componente Linea1
  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  //linea 2
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  //imagen
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  //funcion para el boton exportar #meme es ek id en el div meme
  const onClickExportar = function (evento) {
    alert("EXPORTAR")
    html2canvas(document.querySelector("#meme")).then(canvas => {  
              //codigo para decargar el elemento canvas / var img convierte la imagen 
    var img    = canvas.toDataURL("image/png");           
    var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    
  });
  }
 
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="mrt">Mister T</option>
        <option value="rana">Rana Rene</option>
        <option value="nerd">Virgo Nerd</option>
      </select><br/>
      <input onChange={onChangeLinea1}  type="text" placeholder="linea 1"/> <br/>
      <input onChange={onChangeLinea2}  type="text" placeholder="linea 2"/> <br/>
      <button onClick={onClickExportar}>Exportar</button>
      
      <div className="meme" id="meme">
        <span>{linea1}</span> <br/>
        <span>{linea2}</span>
        <img src={"/imagenes/" + imagen + ".jpg"}/>
      </div>

 




    </div>
  );
}

export default App;
