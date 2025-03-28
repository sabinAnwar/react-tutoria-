import React from "react";
export default class App extends React.Component {
  state = {
    title: "Sabin El Anwar",
  };
  render() {
    const { title } = this.props.title;
    return <div title={title}>Sabin El Anwar</div>;
  }
}
