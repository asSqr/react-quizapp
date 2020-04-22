import {
  SHOW_MODAL,
  HIDE_MODAL,
  TOGGLE_MODAL,
} from "../actions/modalActionCreator";

const initialState = {
  isShown: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isShown: true };
    case HIDE_MODAL:
      return { ...state, isShown: false };
    case TOGGLE_MODAL:
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
};
