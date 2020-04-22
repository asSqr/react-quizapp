export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

export const showModal = () => {
  return {
    type: SHOW_MODAL,
  };
};
export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
  };
};
