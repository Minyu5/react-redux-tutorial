import { combineReducers } from "redux";
import tutorial from "./tutorialReducer";

const rootReducer = combineReducers({
  tutorial: tutorial
});

export default rootReducer;
