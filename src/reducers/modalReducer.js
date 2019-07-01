const initState = {
  modalIsOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modalIsOpen: false
      };
    case "CLOSE_MODAL":
      console.log("CLOSED");
      return {
        modalIsOpen: false
      };

    default:
      return state;
  }
};
