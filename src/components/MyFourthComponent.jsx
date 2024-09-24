import React from "react";

export const MyFourthComponent = () => {
  const handleClicked = (e, name) => {
    alert("Haz hecho click en el botón: " + name);
  };

  const handleDoubleClicked = () => {
    alert("Haz hecho doble click");
  };

  return (
    <div>
      <h1>MyFourthComponent</h1>
      <div>
        <button
          className="btn btn-danger"
          onClick={() => {
            alert("Soy un evento click");
          }}
        >
          Haz Clic
        </button>
      </div>

      <div>
        <button
          className="btn btn-success"
          onClick={(e) => handleClicked(e, "DEIVIS")}
        >
          ¡Aqui También haz Clic!
        </button>
      </div>

      <div>
        <button className="btn btn-info" onDoubleClick={handleDoubleClicked}>
          ¡Haz doble Clic!
        </button>
      </div>
    </div>
  );
};
