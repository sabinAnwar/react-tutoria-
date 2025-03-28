import React from "react";
export default class App extends React.Component {
  state = {
    counterValue: 3,
  };
  componentDidMount() { // This lifecycle method is called after the component is mounted
   setInterval(() => {
      this.setState((state) => {
        if (state.counterValue > 0) {
          return { counterValue: state.counterValue - 1 };
        } else {
          return { counterValue: 0 };
        }
      });
    }, 1000); // Decrease the counter value every second
  }
  render() {

    return <strong>Countdown={this.state.counterValue}</strong>;
  }
}