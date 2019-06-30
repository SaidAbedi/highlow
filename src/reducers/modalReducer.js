const initState = {
  isOpen: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      console.log("OPENED");
      return {
        ...state,
        isOpen: true
      };
    case "CLOSE_MODAL":
      console.log("CLOSED");
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
};
