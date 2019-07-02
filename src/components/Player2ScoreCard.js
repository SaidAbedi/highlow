import React from "react";

const Player2ScoreCard = props => {
  const { score, streak, value } = props.player2Card;

  const scoreCard = value ? (
    <div>
      <h3>Score:{score}</h3>
      <h3>Winning Streak:{streak}</h3>
    </div>
  ) : null;

  return (
    <div>
      <h1>Player 2</h1>
      {scoreCard}
    </div>
  );
};

export default Player2ScoreCard;
