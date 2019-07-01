const initState = {
  deckId: null,
  inProgress: false,
  dealerCard: {
    value: "",
    image: "",
    score: 0,
    inProp: false
  },
  currentPlayer: null,
  player1Card: {
    active: true,
    value: "",
    image: "",
    score: 0,
    streak: 5
  },
  player2Card: {
    active: false,
    value: "",
    image: "",
    score: 0,
    streak: 8
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEW_DECK":
      return {
        ...state,
        deckId: action.payload
      };

    case "FETCH_CARDS":
      let { value } = action.payload[0];
      let cardValue =
        value === "JACK" ||
        value === "QUEEN" ||
        value === "KING" ||
        value === "ACE"
          ? 10
          : parseInt(value);

      /// need to refactor
      let { value: playerValue } = action.payload[1];
      let playerCardValue =
        playerValue === "JACK" ||
        playerValue === "QUEEN" ||
        playerValue === "KING" ||
        playerValue === "ACE"
          ? 10
          : parseInt(playerValue);

      let currentPlayer =
        state.player2Card.active === false ? "player1Card" : "player2Card";
      return {
        ...state,
        inProgress: true,
        dealerCard: {
          ...state.dealerCard,
          value: cardValue,
          image: action.payload[0].image,
          inProp: false
        },
        [currentPlayer]: {
          ...state,
          ...state[currentPlayer],
          value: playerCardValue,
          image: action.payload[1].image
        }
      };
    case "SHOW_DEALER_CARD":
      return {
        ...state,
        inProgress: false,
        dealerCard: {
          ...state.dealerCard,
          inProp: true
        },
        player1Card: {
          ...state.player1Card
        }
      };
    case "WON_HAND":
      let current =
        state.player2Card.active === false ? "player1Card" : "player2Card";
      return {
        ...state,
        [current]: {
          ...state[current],
          score: state[current].score + 1,
          streak: state[current].streak + 1
        }
      };
    case "LOST_HAND":
      return {
        ...state,
        player1Card: {
          ...state.player1Card,
          streak: 0
        }
      };
    case "ADD_PLAYER2":
      console.log("player2");

      return {
        ...state,
        inProgress: false,
        ...state.currentPlayer,
        player1Card: {
          active: false
        },
        player2Card: {
          ...state.player2Card,
          active: true
        }
      };
    case "REMOVE_PLAYER2":
      return {
        ...state
      };
    default:
      return { ...state };
  }
};
