import React, { useState } from "react";

const HelloWorld = ({ mensaje }) => {
  const [msj, setMsj] = useState("");
  return (
    <div>
      <h1>
        {" "}
        Hello {mensaje} {msj}!{" "}
      </h1>
      <button
        className="btn btn-outline-primary"
        onClick={() => setMsj("(fron changed state)")}
      >
        Click me
      </button>
    </div>
  );
};

export default HelloWorld;
