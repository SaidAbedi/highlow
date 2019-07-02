const initState = {
  modalIsOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalIsOpen: !state.modalIsOpen
      };
    case "CLOSE_MODAL":
      return {
        modalIsOpen: !state.modalIsOpen
      };

    default:
      return state;
  }
};
