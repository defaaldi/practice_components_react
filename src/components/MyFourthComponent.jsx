import React from "react";

export const MyFourthComponent = () => {
  return (
    <div>
      <div>MyFourthComponent</div>
      <button
        id="UNO"
        className="btn btn-danger"
        onClick={() => {
          alert("Soy un evento click");
        }}
      >
        Haz Clic
      </button>
    </div>
  );
};
