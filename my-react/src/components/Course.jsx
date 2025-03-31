// import propTypes from "prop-types";
// function Course(props) {
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.link1}</p>
//       <p>{props.link2}</p>
//       <p>{props.link3}</p>
//     </div>
//   );
// }

// Course.propTypes = {
//   name: propTypes.string,
//   link1: propTypes.string, // <-- Das hier prüft den Typ
//   link2: propTypes.string,
//   link3: propTypes.string,
// };

// export default Course;

// export default function App() {
//   const [headline, setHeadline] = useState("");
//   const [inputValue, setInputValue] = useState("");

//   const buttonClicked = () => {
//     setHeadline(inputValue);
//   };

//   const inputChanged = (event) => {
//     console.log(event.target.value);
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <h1>{headline}</h1>
//       <input type="text" onInput={inputChanged} />
//       <br />
//       <button onClick={buttonClicked}>Make me big!</button>
//     </div>
//   );
// }
import React, { useState } from "react";
import { StatusChanger } from "./StatusChanger";

export default function App() {
  const [status, setStatus] = useState("Verfügbar ✅");
  const onStatusChange = (newStatus) => setStatus(newStatus);

  return (
    <div>
      <h1>Status: {status}</h1>
      <p>
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Verfügbar ✅"
        />
        <StatusChanger
          onStatusChange={onStatusChange}
          statusText="Beschäftigt 📴"
        />
      </p>
    </div>
  );
}
