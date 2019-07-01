const initState = {
  deckId: null,
  inProgress: false,
  dealerCard: {
    value: "",
    image: "",
    score: 0,
    inProp: false,
    visibility: "hidden"
  },
  player1Card: {
    value: "",
    image: "",
    score: 0,
    streak: 0
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
      return {
        ...state,
        inProgress: true,
        dealerCard: {
          ...state.dealerCard,
          value: cardValue,
          image: action.payload[0].image,
          inProp: false
        },
        player1Card: {
          ...state.player1Card,
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
      return {
        ...state,
        player1Card: {
          ...state.player1Card,
          score: state.player1Card.score + 1,
          streak: state.player1Card.streak + 1
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
    default:
      return state;
  }
};
