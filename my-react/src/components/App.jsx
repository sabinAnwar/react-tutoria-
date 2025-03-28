import React from "react";
export default class App extends React.Component {
//   state = {
//     counterValue: 10,
//   };
//   componentDidMount() {
//     this.myInterval = setInterval(() => {
//       this.setState((state) => {
//         if (state.counterValue > 0) {
//           return { counterValue: state.counterValue - 1 };
//         } else {
//           return { counterValue: 0 };
//         }
//       });
//     }, 1000); // Decrease the counter value every second
//   }
//   componentWillUnmount() {
//     clearInterval(this.myInterval);
//   }
//   // componentDidUpdate() {
//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevProps, prevState);
//   }
// shouldComponentUpdate(){
//   if(this.state.counterValue === 0) {
//     return false; // Prevent re-rendering when counterValue is 0
//   }
//   return true; // Allow re-rendering for other cases
// }
  render() {
    return <strong>
      {this.props.children} 
      <br />
      {/* <h1>Counter Value: {this.state.counterValue}</h1> */}
      {/* <h1>Counter Value: {this.props.children}</h1> */}
      <h1>Counter Value: {this.props.children}</h1>
      {/* <h1>Counter Value: {this.state.counterValue}</h1> */}
    </strong>;
  }
}
