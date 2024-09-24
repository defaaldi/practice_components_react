import PropTypes from "prop-types";

export const MyChild = (props) => {
  const handleChangeName = () => {
    const newName = prompt("Ingresa un nuevo nombre: ");
    if (newName) {
      props.setName(newName);
    }
  };
  return (
    <div>
      <h1>MyChild</h1>
      <p>Nombre Actual: {props.name}</p>
      <button className="btn btn-primary" onClick={handleChangeName}>
        Cambiar Nombre
      </button>
    </div>
  );
};

MyChild.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
};
