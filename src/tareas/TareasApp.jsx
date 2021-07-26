import React, { useEffect, useState } from "react"; //importamos react, useState y useEffect
import TareasCards from "./components/TareasCards"; //importamos componente TareasCards
import TareasForm from "./components/TareasForm"; // importamos componente TareasForm

const TareasApp = () => {
  const data = JSON.parse(localStorage.getItem("tareas")) || []; //guardamos en data lo que haya en localstorage o dejamos un arreglo vacio

  const [tareas, setTareas] = useState(data); //creamos useState y asignamos el valor de data
  const [inputValue, setInputValue] = useState(""); //Creamos estado para manejar el fromulario

  useEffect(() => {
    //Efecto cuando cambia el valor del estado tareas
    localStorage.setItem("tareas", JSON.stringify(tareas)); //guardamos en localStorage las tareas
  }, [tareas]);

  const change = ({ target }) => {
    //Funcion para manejar cuando cambia el input del form
    setInputValue(target.value);
  };

  const guardarTarea = (e) => {
    //funcion para guardar datos en el estado tareas;
    e.preventDefault();
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

  const borrarTarea = (index) => {
    //Funcion que borra una tarea seleccionada

    //Creamos un nuevo arreglo con las tareas excepto la que seleccionamos por su index
    const nuevoArreglo = tareas.filter((item) => {
      return item.tarea !== tareas[index].tarea;
    });

    setTareas(nuevoArreglo); //Guardamos el nuevo valor en el estado tareas
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
          <TareasForm
            guardarTarea={guardarTarea}
            inputValue={inputValue}
            change={change}
          />

          {tareas.length === 0 ? (
            <h4 className="mt-3">No hay tareas</h4>
          ) : (
            <TareasCards tareas={tareas} borrarTarea={borrarTarea} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TareasApp;
