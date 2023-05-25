import "./index.css";
import { Component } from "react";
class LetterCalculator extends Component {
  state = {
    userInput: "",
    length: 0,
    string: "",
  };

  calculateLength = (event) => {
    this.setState({ userInput: event.target.value });
    this.setState({ string: event.target.value.split(" ").join("") });
    if (this.state.string !== "") {
      this.setState({ length: this.state.string.length });
    }
  };
  render() {
    const { userInput, length, string } = this.state;
    console.log(string);
    console.log(userInput);
    console.log(this.state.string.length);
    return (
      <div className="container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="bottom-container">
          <h1 className="main-heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="userInput">
            Enter the phrase
          </label>

          <input
            type="text"
            className="textContainer"
            placeholder="Enter the phrase"
            value={userInput}
            onChange={this.calculateLength}
            id="userInput"
          />
          <div className="result-container">
            <p className="characters">No. of letters : {length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LetterCalculator;
