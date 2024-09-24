import React from "react";

export const MyFourthComponent = () => {
  const handleClicked = (e, name) => {
    alert("Haz hecho click en el botón: " + name);
  };

  const handleDoubleClicked = () => {
    alert("Haz hecho doble click");
  };

  const handleMouseEnter = (e) => {
    alert("Haz ENTRADO a la Caja");
  };

  const handleMouseleave = (e) => {
    alert("Haz SALIDO de la Caja");
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
      <div
        id="box1"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseleave(e)}
      >
        <p>Pasa el mause por la caja azul</p>
      </div>
    </div>
  );
};
