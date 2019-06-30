import React, { Component } from "react";

class Dealer extends Component {
  render() {
    const {
      dealerCard: { value, image, visibility }
    } = this.props;
    const dealerCardStyle = {
      visibility: visibility
    };

    return (
      <div>
        <h1>Dealer</h1>
        <div style={dealerCardStyle}>
          <img src={image} alt="" />
        </div>
        <h3>Value: {value}</h3>
      </div>
    );
  }
}

export default Dealer;
