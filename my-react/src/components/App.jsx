import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
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
  // const [countdown, setCountdown] = useState(10);
  // const timeOnMinum = useCallback(() => {
  //   if (countdown > 0) {
  //     setCountdown(countdown - 1);
  //   }
  // }, [countdown]);
  // useEffect(() => {
  //   // componentDidMount
  //   const ref = setTimeout(timeOnMinum, 1000);
  // }, [countdown]);

  // const markup = useMemo(() => {
  //   return (
  //     <div>
  //       <h1>Countdown</h1>
  //       <p>{countdown}</p>
  //       <progress value={countdown} min="0" max="10" />
  //     </div>
  //   );
  // }, [countdown]);
  // return markup;
  const [time, setTime] = useState(0); // time in 1/10th seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 100); // 100ms = 1/10th second
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 36000);
    const minutes = Math.floor((time % 36000) / 600);
    const seconds = Math.floor((time % 600) / 10);
    const tenths = time % 10;
    return (
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}.${tenths}`
    );
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Stoppuhr</h1>
      <div className="text-4xl font-mono mb-6">{formatTime(time)}</div>
      <div className="space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleStop}
        >
          Stopp
        </button>
      </div>
    </div>
  );
}
