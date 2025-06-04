import { useState } from "react";
import Pelicula from "./components/Pelicula";
import "./App.css";

function App() {
  const peliculas = [
    {
      nombre: "Spider-man",
      anio: "2002",
      imagen:
        "https://dam.smashmexico.com.mx/wp-content/uploads/2018/03/femme-fatale-spider-man-homecoming-2-jessica-drew.jpg",
      puntaje: 8.5,
    },
    {
      nombre: "Batman",
      anio: "2006",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg",
      puntaje: 9.5,
    },
    {
      nombre: "Batman & Robin",
      anio: "1997",
      imagen:
        "https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png",
      puntaje: 8.5,
    },
  ];

  return (
    <div>
      <h1>Listado de peliculas</h1>
      <div>
        {peliculas.map((peli, index) => (
          <Pelicula
            key={index}
            nombre={peli.nombre}
            anio={peli.anio}
            imagen={peli.imagen}
            puntaje={peli.puntaje}
          />
        ))}
      </div>

      {}
    </div>
  );
}

export default App;
