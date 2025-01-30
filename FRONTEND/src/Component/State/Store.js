import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk"; // Make sure this is correctly imported
import authReducer from "./Authentication/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply the middleware here
);