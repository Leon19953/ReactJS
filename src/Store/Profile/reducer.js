import { TOGGLE_CHECKBOX } from "./constants";

const initialState = {
  checked: false,
  name: "Alexey",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX: {
      return {
        ...state,
        checked: !state.checked,
      };
    }
    default:
      return state;
  }
};
