import React from "react";

const ListaPeliculas = ({ peliculas }) => {
  //   console.log(props);

  return (
    <ul>
      {peliculas.map((pelicula) => (
        <li key={pelicula.id}>
          {pelicula.title} - {pelicula.year}
        </li>
      ))}
    </ul>
  );
};

export default ListaPeliculas;
