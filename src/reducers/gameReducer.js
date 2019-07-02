///Default is player1

const initState = {
  deckId: null,
  inProgress: false,
  dealerCard: {
    value: "",
    image: "",
    score: 0,
    inProp: false
  },
  player1Card: {
    value: "",
    image: "",
    score: 0,
    streak: 0
  },
  player2Card: {
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
        deckId: action.payload,
        dealerCard: {
          value: action.payload[0].value,
          image: action.payload[0].image
        },
        ...state.player1Card,
        player1Card:
          action.otherload === "player1Card"
            ? {
                ...state.player1Card,
                value: action.payload[1].value,
                image: action.payload[1].image,
                inProp: false
              }
            : {},
        ...state.player2Card,
        player2Card:
          action.otherload === "player2Card"
            ? {
                ...state.player2Card,
                value: action.payload[1].value,
                image: action.payload[1].image,
                inProp: false
              }
            : {}
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
        ...state.player1Card,
        player1Card:
          action.otherload === "player1Card"
            ? {
                ...state.player1Card,
                value: playerCardValue,
                image: action.payload[1].image,
                inProp: false
              }
            : {},
        ...state.player2Card,
        player2Card:
          action.otherload === "player2Card"
            ? {
                ...state.player2Card,
                value: playerCardValue,
                image: action.payload[1].image,
                inProp: false
              }
            : {}
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
        },
        player2Card: {
          ...state.player2Card
        }
      };
    case "WON_HAND":
      return {
        ...state,
        ...state.player1Card,
        player1Card: {
          ...state.player1Card,
          score: state.player1Card.score + 1,
          streak: state.player1Card.streak + 1
        },
        ...state.player2Card,
        player2Card: {
          ...state.player2Card,
          score: state.player2Card.score + 1,
          streak: state.player2Card.streak + 1
        }
      };
    case "LOST_HAND":
      return {
        ...state,
        ...state.player1Card,
        player1Card: {
          ...state.player1Card,
          streak: 0
        },
        ...state.player2Card,
        player2Card: {
          ...state.player2Card,
          streak: 0
        }
      };
    case "SWITCH_PLAYER":
      return {
        ...state,
        inProgress: false,
        ...state.dealerCard,
        player1Card:
          action.otherload === "player1Card"
            ? {
                // ...state.player1Card,
                value: playerCardValue,
                image: action.payload[1].image
              }
            : {},
        player2Card:
          action.otherload === "player1Card"
            ? {
                // ...state.player2Card,
                value: playerCardValue,
                image: action.payload[1].image
              }
            : {}
      };
    default:
      return state;
  }
};
