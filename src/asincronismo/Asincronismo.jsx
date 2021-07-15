import React, { useState } from "react";

const Asincronismo = () => {
  const [state, setState] = useState([]);
  //Promesas

  //   const validacion = true;

  //   const promesaValidacion = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (validacion) {
  //           resolve({
  //             ok: true,
  //             mensaje: "Datos descargados",
  //           });
  //         } else {
  //           reject({
  //             ok: false,
  //             mensaje: "Error de autenticación",
  //           });
  //         }
  //       }, 2000);
  //     });
  //   };

  //   promesaValidacion()
  //     .then((respuesta) => console.log(respuesta))
  //     .catch((error) => console.log(error));

  //Fetch

  // fetch("https://www.superheroapi.com/api.php/2977672439133477/search/superman")
  //   .then((response) => response.json())
  //   .then(({ results }) => console.log(results))
  //   .catch((error) => console.log(error));

  //Async await

  const getHeroe = async () => {
    try {
      const resp = await fetch(
        "https://www.superheroapi.com/api.php/2977672439133477/search/superman"
      );
      const data = await resp.json();
      setState(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  getHeroe();

  return (
    <div>
      <h1>Asincronismo en Javascript</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {state.map((heroe) => (
            <tr key={heroe.id}>
              <td>
                <img src={heroe.image.url} alt={heroe.name} />
              </td>
              <td>{heroe.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Asincronismo;
