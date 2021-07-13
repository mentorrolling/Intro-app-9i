import React from "react";
import ListaPeliculas from "./ListaPeliculas";
import movies from "./webflix";

const WebFlixApp = () => {
  console.log(movies);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bienvenido a WebFlix</h1>
          <hr />
          <h3>Películas</h3>
          {/* lista de películas */}

          <ListaPeliculas peliculas={movies} />
          {/* <ul>
            {movies.map((pelicula) => {
              return (
                <li key={pelicula.id}>
                  {pelicula.title} - {pelicula.year}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default WebFlixApp;
