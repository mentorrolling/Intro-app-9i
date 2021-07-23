import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import WebFlixApp from "./webflix/WebFlixApp";
// import CounterApp from "./counterapp/CounterApp";
// import Asincronismo from "./asincronismo/Asincronismo";
// import HelloWorld from "./helloWorld/HelloWorld";
// import RouteApp from "./routeo/routes/RouteApp";
import TareasApp from "./tareas/TareasApp";

// import App from "./App";

//JSX
// const title = <h1>Hola React!</h1>;

//No JSX
// const titulo = React.createElement("h1", {}, "Hola React sin JSX");

//que, donde

ReactDOM.render(
  //   <App name="Adolfo Rodriguez" edad={40} />
  //   <WebFlixApp />,
  // <CounterApp valor={20} />,
  // <Asincronismo />,
  // <HelloWorld mensaje="My friend" />,
  // <RouteApp />,
  <TareasApp />,
  document.getElementById("root")
);
