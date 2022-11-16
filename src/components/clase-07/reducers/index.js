import { counterReducer } from "./counterReducer";
import { combineReducers } from 'redux';


const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;