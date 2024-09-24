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

  const handleMouse = (e, action) => {
    alert(`Has ${action} la caja`);
  };

  const handleInsideInput = (e) => {
    console.log("Estas dentro del input, escribe tu nombre!!");
  };

  const handleOutsideInput = (e) => {
    console.log("Estás fuera del input, Adiós!!");
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
        className="mt-4"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseleave(e)}
      >
        <p>Pasa el mause por la caja azul</p>
      </div>
      <div
        id="box2"
        className="mt-4"
        onMouseEnter={(e) => handleMouse(e, "Entrado a")}
        onMouseLeave={(e) => handleMouse(e, "salido de")}
      ></div>
      <div className="mt-4">
        <input
          type="text"
          onFocus={(e) => handleInsideInput(e)}
          onBlur={(e) => handleOutsideInput(e)}
        />
      </div>
    </div>
  );
};
