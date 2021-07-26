import React from "react";

const TareasForm = ({ guardarTarea, inputValue, change }) => {
  return (
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
  );
};

export default TareasForm;
