const initState = {
  current: {
    currentPlayerCount: 2,
    currentPlayer: "player1Card",
    nonCurrentPlayer: "player2Card"
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_CURRENT_PLAYER":
      return {
        current: {
          currentPlayerCount: action.payload.current.currentPlayerCount + 1,
          currentPlayer:
            action.payload.current.currentPlayerCount % 2 === 0
              ? "player2Card"
              : "player1Card",
          nonCurrentPlayer:
            action.payload.current.currentPlayerCount % 2 === 0
              ? "player1Card"
              : "player2Card"
        }
      };
    default:
      return state;
  }
};
