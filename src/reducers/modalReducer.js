const initState = {
  modalIsOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalIsOpen: true
      };
    case "CLOSE_MODAL":
      return {
        modalIsOpen: false
      };

    default:
      return state;
  }
};
