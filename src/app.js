import React, { Component } from "react";
import Navbar from "./components/Navbar";


class App extends Component {
	state = {
    gameImages: GameImages,
    clickedImages: [],
    score: 0,
    topScore: 0,
  };


  handleClick = event => {
    const clickedImage = event.
    if () {
      this.setState({
        gameImages: this.shuffle(this.state.gameImages),
        clickedImages: [],
        score: 0,

    } else {
      let newScore = this.state.score + 1;

  render() {
   return (
    <div>
      <Navbar score={this.state.score} topScore={this.state.topScore} gameStatus={this.state.gameStatus} />
    </div>
    );
  }
}

export default App;