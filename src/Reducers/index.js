import { updateCartLength } from "../Actions";
import changeTheNumber from "./IncDecReducer";
import updateLength from "./UpdateCartLength";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  updateCartLength: updateLength,
});
export default rootReducer;
