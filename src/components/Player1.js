import React, { Component } from "react";

class Player1 extends Component {
  render() {
    const {
      currentPlayer,
      player1Card: { value, image }
    } = this.props;
    return (
      <div
        className={
          currentPlayer !== "player1Card" ? "mobile_display_hidden" : null
        }
      >
        <h1>Player 1</h1>
        <div className={value ? "cardBorderBox__active" : "cardBorderBox"}>
          <img src={image} alt="" />
        </div>
        <h4>Value: {value}</h4>
      </div>
    );
  }
}

export default Player1;
