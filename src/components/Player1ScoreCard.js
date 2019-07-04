import React from "react";

const Player1ScoreCard = props => {
  const { score, streak, value } = props.player1Card;

  const scoreCard = value ? (
    <div>
      <h3>Score:{score}</h3>
      <h3>Winning Streak:{streak}</h3>
    </div>
  ) : null;

  return (
    <div className="playerScoreBoard">
      <h1>Player 1</h1>
      {scoreCard}
    </div>
  );
};

export default Player1ScoreCard;
