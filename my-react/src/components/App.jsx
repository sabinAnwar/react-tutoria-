import React, { useState, useEffect } from "react";
// export default function App(){
// //   state = {
// //     counterValue: 10,
// //   };
// //   componentDidMount() {
// //     this.myInterval = setInterval(() => {
// //       this.setState((state) => {
// //         if (state.counterValue > 0) {
// //           return { counterValue: state.counterValue - 1 };
// //         } else {
// //           return { counterValue: 0 };
// //         }
// //       });
// //     }, 1000); // Decrease the counter value every second
// //   }
// //   componentWillUnmount() {
// //     clearInterval(this.myInterval);
// //   }
// //   // componentDidUpdate() {
// //   componentDidUpdate(prevProps, prevState) {
// //     console.log(prevProps, prevState);
// //   }
// // shouldComponentUpdate(){
// //   if(this.state.counterValue === 0) {
// //     return false; // Prevent re-rendering when counterValue is 0
// //   }
// //   return true; // Allow re-rendering for other cases
// // }
// //   return <strong>
// //     {this.props.children}
// //     <br />
// //     {/* <h1>Counter Value: {this.state.counterValue}</h1> */}
// //     {/* <h1>Counter Value: {this.props.children}</h1> */}
// //     <h1>Counter Value: {this.props.children}</h1>
// //     {/* <h1>Counter Value: {this.state.counterValue}</h1> */}
// //   </strong>;
// // }

//     const [counterState, setCounterState] = useState(0);

//     return (
//       <div>
//         <button onClick={() => {
//           setCounterState(counterState + 1);
//         }}>Click me</button>
//         <p>Counter: {counterState}</p>
//       </div>
//     );

// }import React, { useState, useEffect } from 'react';

export default function App() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // componentDidMount
    const ref = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);
  }, [countdown]);

  return (
    <div>
      <h1>Countdown</h1>
      <p>{countdown}</p>
      <progress value={countdown} min="0" max="10" />
    </div>
  );
}
