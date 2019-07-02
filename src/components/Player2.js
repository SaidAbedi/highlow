import React, { Component } from "react";

class Player1 extends Component {
  render() {
    const {
      player2Card: { value, image }
    } = this.props;
    return (
      <div>
        <h1>Player 2</h1>
        <div className={value ? "cardBorderBox__active" : "cardBorderBox"}>
          <img src={image} alt="" />
        </div>
        <h4>Value: {value}</h4>
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
