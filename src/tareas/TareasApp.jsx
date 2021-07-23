import React, { useState } from "react";

const TareasApp = () => {
  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const change = ({ target }) => {
    setInputValue(target.value);
  };

  const guardarTarea = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    if (inputValue.length > 4) {
      setTareas([
        ...tareas,
        {
          tarea: inputValue,
          done: false,
        },
      ]);

      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <h1>Lista de Tareas</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={guardarTarea}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Escriba la tarea"
                value={inputValue}
                onChange={change}
              />
            </div>
          </form>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default TareasApp;
