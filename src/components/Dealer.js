import React, { Component } from "react";
import { Transition } from "react-transition-group";

class Dealer extends Component {
  render() {
    const {
      dealerCard: { image, inProp }
    } = this.props;

    return (
      <div className="dealerStyle">
        <h1>Dealer</h1>
        <div>
          <Transition timeout={400} in={inProp} appear>
            {state => (
              <div className="cardBorderBox">
                <div id="me" className={`dealerCard  dealerCard-${state}`}>
                  <img src={image} alt="" />
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    );
  }
}

export default Dealer;
