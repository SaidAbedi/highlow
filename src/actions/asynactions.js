import axios from "axios";

export const fetchNewDeck = defaultPlayer => async dispatch => {
  await axios
    .get(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
                    `
    )
    .then(({ data: { deck_id } }) => {
      dispatch({
        type: "FETCH_NEW_DECK",
        payload: deck_id,
        otherload: defaultPlayer
      });
    });
};

export const fetchCards = (deckId, current) => async dispatch => {
  await axios
    .get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2
      `
    )
    .then(({ data: { cards } } = {}) => {
      dispatch({
        type: "FETCH_CARDS",
        payload: cards,
        otherload: current
      });
    });
  //
};
