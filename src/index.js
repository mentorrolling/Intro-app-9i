import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
// import WebFlixApp from "./webflix/WebFlixApp";
import CounterApp from "./counterapp/CounterApp";

// import App from "./App";

//JSX
// const title = <h1>Hola React!</h1>;

//No JSX
// const titulo = React.createElement("h1", {}, "Hola React sin JSX");

//que, donde

ReactDOM.render(
  //   <App name="Adolfo Rodriguez" edad={40} />
  //   <WebFlixApp />,
  <CounterApp valor={10} />,
  document.getElementById("root")
);
