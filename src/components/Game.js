import React, { Component } from "react";
import Dealer from "./Dealer";
import Player1 from "./Player1";
import Player2 from "./Player2";
import ResultModal from "./Modal";
import { connect } from "react-redux";
import { fetchCards, fetchNewDeck } from "../actions/asynactions";
import {
  wonHand,
  lostHand,
  showDealerCard,
  showModal
} from "../actions/action";

class Game extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchNewDeck();
  }

  handleHighChoice(dealerValue, player1Value) {
    this.showDealerCard();
    player1Value === dealerValue
      ? this.handleDraw()
      : player1Value < dealerValue
      ? this.handleWonHand()
      : this.handleLostHand();
  }
  handleLowChoice(dealerValue, player1Value) {
    this.showDealerCard();
    player1Value === dealerValue
      ? this.handleDraw()
      : player1Value > dealerValue
      ? this.handleWonHand()
      : this.handleLostHand();
  }
  showDealerCard() {
    this.props.showDealerCard();
    this.props.showModal();
  }
  handleWonHand() {
    this.props.wonHand();
    this.props.showModal();
  }
  handleLostHand() {
    this.props.lostHand();
    this.props.showModal();
  }
  handleDraw() {
    ///need to add draw to notification
  }

  render() {
    return (
      <div className="center">
        <Dealer
          dealerCard={this.props.dealerCard}
          showModal={this.props.showModal}
        />

        {!this.props.inProgress ? (
          <button
            className="dealCardBtn"
            onClick={() => this.props.fetchCards(this.props.gameId)}
          >
            DEAL CARDS
          </button>
        ) : null}

        <div className="playersSection">
          <div className="player player1Position">
            <Player1 player1Card={this.props.player1Card} />
            <div>
              {/* move buttons ot player componet */}
              <button
                onClick={() =>
                  this.handleLowChoice(
                    this.props.dealerCard.value,
                    this.props.player1Card.value
                  )
                }
              >
                LOW
              </button>
              <button
                onClick={() =>
                  this.handleHighChoice(
                    this.props.dealerCard.value,
                    this.props.player1Card.value
                  )
                }
              >
                HIGH
              </button>
            </div>
          </div>
          <div className="player player2Position">
            <Player2 />
          </div>
        </div>
        <ResultModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inProgress: state.game.inProgress,
    gameId: state.game.deckId,
    dealerCard: state.game.dealerCard,
    player1Card: state.game.player1Card
  };
};

export default connect(
  mapStateToProps,
  { fetchCards, fetchNewDeck, wonHand, lostHand, showDealerCard, showModal }
)(Game);
