import React from "react";

const Pelicula = ({ nombre, anio, imagen, puntaje }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      <h2>
        {nombre} ({anio})
      </h2>
      <img src={imagen} alt="{nombre}" style={{ width: "200px" }} />
      <p>
        <strong>Puntaje:</strong> {puntaje}
      </p>
    </div>
  );
};
export default Pelicula;
