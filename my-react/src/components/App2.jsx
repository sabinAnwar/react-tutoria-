import React from "react";
import Course from "./Course";


export default class App2 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headline}</h1>
        <Course
          name="Sabin Training"
          link1={234}
          link2="Instagram"
          link3="HelloTalk"
        />
        <Course link1={123}/>
      </div>
    );
  }
}
App2.displayNeame = "App2";
App2.defaultProps = {
  headline: "Sa",
};
