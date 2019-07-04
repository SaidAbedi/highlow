import React, { Component } from "react";
import Dealer from "./Dealer";
import Player1 from "./Player1";
import Player1ScoreCard from "./Player1ScoreCard";
import Player2 from "./Player2";
import Player2ScoreCard from "./Player2ScoreCard";
import ResultModal from "./Modal";
import { connect } from "react-redux";
import { fetchCards, fetchNewDeck } from "../actions/asynactions";
import {
  wonHand,
  lostHand,
  showDealerCard,
  showModal,
  closeModal,
  switchPlayer,
  switchCounter
} from "../actions/action";

class Game extends Component {
  constructor(props) {
    super(props);
    this.handleSwitchPlayer = this.handleSwitchPlayer.bind(this);
  }
  componentDidMount() {
    this.currentPlayer = this.props.current.current.currentPlayer;
    this.props.fetchNewDeck(this.currentPlayer);
  }
  componentDidUpdate() {
    this.currentPlayer = this.props.current.current.currentPlayer;
  }
  dealCards() {
    this.currentPlayer = this.props.current.current.currentPlayer;
    this.checkThreeRow(this.currentPlayer);
    this.props.fetchCards(this.props.gameId, this.currentPlayer);
  }
  checkThreeRow(arg) {
    if (this.props[arg].streak !== 0 && this.props[arg].streak % 3 === 0) {
      this.handleThreeInRoW();
    }
  }

  handleHighChoice(dealerValue, cardValue) {
    this.showDealerCard();

    if (cardValue === dealerValue) {
      this.handleDraw();
    } else if (cardValue < dealerValue) {
      this.handleWonHand();
    } else {
      this.handleLostHand();
    }
  }

  handleLowChoice(dealerValue, cardValue) {
    this.showDealerCard();

    if (cardValue === dealerValue) {
      this.handleDraw();
    } else if (cardValue > dealerValue) {
      this.handleWonHand();
    } else {
      this.handleLostHand();
    }
  }

  showDealerCard() {
    this.props.showDealerCard();
  }
  handleWonHand() {
    this.props.wonHand();
  }
  handleLostHand() {
    this.props.lostHand();
  }

  handleSwitchPlayer(load) {
    this.props.switchPlayer(load);
    this.props.switchCounter(load.current.currentPlayer);
    this.props.closeModal();
    this.props.fetchNewDeck(this.currentPlayer);
  }

  handleDraw() {
    // alert("draw");
  }
  handleThreeInRoW() {
    this.props.showModal();
  }

  render() {
    let { currentPlayer } = this.props.current.current;
    return (
      <div className="center">
        <div className="topDisplay">
          <Player1ScoreCard player1Card={this.props.player1Card} />
          <Dealer dealerCard={this.props.dealerCard} />
          <Player2ScoreCard player2Card={this.props.player2Card} />
        </div>

        {!this.props.inProgress ? (
          <button className="dealCardBtn" onClick={() => this.dealCards()}>
            DEAL CARDS
          </button>
        ) : null}

        <div className="playersSection">
          <div className="player player1Position">
            <Player1 player1Card={this.props.player1Card} />
          </div>
          <div className="player buttonSection">
            <div
              className={
                this.props.inProgress
                  ? "buttonSection__Visible"
                  : "buttonSection__Hidden"
              }
            >
              <button
                className="button low__button"
                onClick={() =>
                  this.handleLowChoice(
                    this.props.dealerCard.value,
                    this.props[currentPlayer].value
                  )
                }
              >
                LOW
              </button>
              <button
                className="button high__button"
                onClick={() =>
                  this.handleHighChoice(
                    this.props.dealerCard.value,
                    this.props[currentPlayer].value
                    /* this.props.player1Card.value */
                  )
                }
              >
                HIGH
              </button>
            </div>
          </div>
          <div className="player player2Position">
            <Player2 player2Card={this.props.player2Card} />
          </div>
        </div>
        <ResultModal handleSwitchPlayer={this.handleSwitchPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inProgress: state.game.inProgress,
    gameId: state.game.deckId,
    dealerCard: state.game.dealerCard,
    current: state.players,
    player1Card: state.game.player1Card,
    player2Card: state.game.player2Card
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCards,
    fetchNewDeck,
    wonHand,
    lostHand,
    showDealerCard,
    showModal,
    closeModal,
    switchPlayer,
    switchCounter
  }
)(Game);
