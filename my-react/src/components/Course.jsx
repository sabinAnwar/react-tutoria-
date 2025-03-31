import propTypes from "prop-types";
function Course(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.link1}</p>
      <p>{props.link2}</p>
      <p>{props.link3}</p>
    </div>
  );
}

Course.propTypes = {
  name: propTypes.string,
  link1: propTypes.string, // <-- Das hier prüft den Typ
  link2: propTypes.string,
  link3: propTypes.string,
};

export default Course;
