import PropTypes from "prop-types";
export const MyThirdComponent = (props) => {
  return (
    <div>
      <h1>Comuncación entre componentes</h1>
      <ul>
        <li>{props.name}</li>
        <li>{props.last_name}</li>
        <li>{props.edad}</li>
      </ul>
    </div>
  );
};
MyThirdComponent.PropTypes = {
  name: PropTypes.string,
  last_name: PropTypes.string,
  edad: PropTypes.number,
};
