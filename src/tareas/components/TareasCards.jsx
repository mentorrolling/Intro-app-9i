import React from "react";

const TareasCards = ({ tareas, borrarTarea }) => {
  return (
    <div className="card mt-3">
      <ul className="list-group list-group-flush">
        {tareas.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {item.tarea}
            <button
              className="btn btn-outline-danger"
              onClick={() => borrarTarea(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TareasCards;
