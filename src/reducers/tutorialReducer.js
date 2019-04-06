import { SELECT_TAB } from "../actions/types";

const initialState = {
  activeTab: "1"
};

export default function tutorial(state = initialState, action) {
  //console.log(state);
  switch (action.type) {
    case SELECT_TAB:
      return {
        ...state,
        activeTab: action.payload
      };
    default:
      return state;
  }
}
