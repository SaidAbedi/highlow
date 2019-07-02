import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import modalReducer from "./modalReducer";
import playerReducer from "./playersReducer";

export default combineReducers({
  game: gameReducer,
  modal: modalReducer,
  players: playerReducer
});
