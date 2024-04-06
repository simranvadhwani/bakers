import changeTheNumber from "./IncDecReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
});
export default rootReducer;
