import React, { Component } from "react";
import Dealer from "./Dealer";
import Player1 from "./Player1";
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
    this.props.fetchNewDeck();
  }

  handleHighChoice(dealerValue, player1Value) {
    this.showDealerCard();
    this.showModal();
    player1Value === dealerValue
      ? this.handleDraw()
      : player1Value < dealerValue
      ? this.handleWonHand()
      : this.handleLostHand();
  }
  handleLowChoice(dealerValue, player1Value) {
    player1Value === dealerValue
      ? this.handleDraw()
      : player1Value > dealerValue
      ? this.handleWonHand()
      : this.handleLostHand();
  }
  showDealerCard() {
    this.props.showDealerCard();
  }
  handleWonHand() {
    this.props.wonHand();
    this.props.fetchCards(this.props.gameId);
  }
  handleLostHand() {
    this.props.lostHand();
    this.props.fetchCards(this.props.gameId);
  }
  handleDraw() {
    this.props.fetchCards(this.props.gameId);
  }

  render() {
    return (
      <div>
        <button>START GAME</button>
        <button onClick={() => this.props.fetchCards(this.props.gameId)}>
          DEAL CARDS
        </button>
        <Dealer dealerCard={this.props.dealerCard} />
        <Player1 player1Card={this.props.player1Card} />
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
        <ResultModal />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.game.deckId,
    dealerCard: state.game.dealerCard,
    player1Card: state.game.player1Card
  };
};

export default connect(
  mapStateToProps,
  { fetchCards, fetchNewDeck, wonHand, lostHand, showDealerCard, showModal }
)(Game);
