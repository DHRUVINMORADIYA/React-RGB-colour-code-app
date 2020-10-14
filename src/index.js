import React from "react";
import ReactDOM from "react-dom";

class Colorcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { r: 200, g: 150, b: 190 };
    this.handleRed = this.handleRed.bind(this);
    this.handleGreen = this.handleGreen.bind(this);
    this.handleBlue = this.handleBlue.bind(this);
  }
  handleRed(e) {
    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 255) {
      this.setState({ r: Number(e.target.value) });
    } else {
      alert("value should be between 0-255");
    }
  }
  handleGreen(e) {
    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 255) {
      this.setState({ g: Number(e.target.value) });
    } else {
      alert("value should be between 0-255");
    }
  }
  handleBlue(e) {
    if (Number(e.target.value) >= 0 && Number(e.target.value) <= 255) {
      this.setState({ b: Number(e.target.value) });
    } else {
      alert("value should be between 0-255");
    }
  }
  componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  handleDone() {
    var hh =
      "#" +
      this.componentToHex(this.state.r) +
      this.componentToHex(this.state.g) +
      this.componentToHex(this.state.b);
    document.body.style = "background:" + hh;
    return <h2>{hh}</h2>;
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <h2>Red: </h2>
        <input type="number" onChange={this.handleRed} value={this.state.r} />
        <h2>Green: </h2>
        <input type="number" onChange={this.handleGreen} value={this.state.g} />
        <h2>Blue: </h2>
        <input type="number" onChange={this.handleBlue} value={this.state.b} />
        {this.handleDone()}
      </div>
    );
  }
}

ReactDOM.render(<Colorcode />, document.getElementById("root"));
