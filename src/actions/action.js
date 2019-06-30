export const wonHand = () => {
  return {
    type: "WON_HAND"
  };
};

export const lostHand = () => {
  return {
    type: "LOST_HAND"
  };
};

export const showDealerCard = () => {
  return {
    type: "SHOW_DEALER_CARD"
  };
};

export const showModal = () => {
  return {
    type: "OPEN_MODAL"
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};
