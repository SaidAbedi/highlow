import React, { Component } from "react";

class Player1 extends Component {
  render() {
    const {
      player1Card: { value, image, score, streak }
    } = this.props;
    return (
      <div>
        <h1>Player 1</h1>
        <div className="cardBorderBox">
          <img src={image} alt="" />
        </div>
        <h4>Value: {value}</h4>
        <h3>Score: {score}</h3>
        <h3>Streak: {streak}</h3>
      </div>
    );
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     handleHighChoice: () => dispatch({ type: "HIGH_CHOICE" })
//   };
// };

export default Player1;
