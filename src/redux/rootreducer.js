import { combineReducers } from "redux";
import { characterReducer } from "./character/characterreducer";
import { eventReducer } from "./events/eventreducer";
import { listReducer } from "./midarea/list";

export const rootReducer = combineReducers({
  character: characterReducer,
  list: listReducer,
  event: eventReducer,
});
