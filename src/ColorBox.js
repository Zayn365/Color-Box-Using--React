import { Component } from "react";
import "./ColorBox.css";

const genRandomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

class ColorBox extends Component {
  state = {
    color: genRandomColor(),
  };

  handleCol = () => {
    this.setState((st) => ({ color: genRandomColor() }));
  };
  render() {
    // console.log(this.state.color);
    return (
      <div
        className="Box"
        onClick={this.handleCol}
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default ColorBox;
