import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  game: gameReducer,
  modal: modalReducer
});
