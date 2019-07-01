import React, { Component } from "react";

class Player1 extends Component {
  render() {
    // const {
    //   player1Card: { value, image, score, streak }
    // } = this.props;
    return (
      <div>
        <h1>Player 2</h1>
        <div className="cardBorderBox">
          <img src="" alt="" />
        </div>
        <h4>Value: </h4>
        <h3>Score: </h3>
        <h3>Streak: </h3>
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
