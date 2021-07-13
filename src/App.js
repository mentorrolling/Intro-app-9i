//como se crea un componente
import React from "react";

const App = ({ name, edad }) => {
  //Crear codigo javascript
  //funciones
  //variables
  console.log(edad);
  console.log(name);

  // const nombre = "Federico Martinez";

  return (
    <div>
      <h1>Soy {name} </h1>
      <hr />
      <p>Este es mi primer componente de React</p>
      <p>Mi edad es de: {edad}</p>
    </div>
  );
};

export default App;
