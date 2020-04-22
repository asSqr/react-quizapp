import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";
import {modalReducer} from "./modalReducer"

export default combineReducers({
  quizInfo: quizReducer,
  modal: modalReducer
});
