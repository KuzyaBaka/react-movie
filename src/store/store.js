import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk";
import { countReducer } from "./reducer";
import { moviesReducer } from "./reducers/moviesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  count: countReducer,
  movies: moviesReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
