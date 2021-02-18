import { createStore, applyMiddleware, compose } from "redux";
import reducerContact from "../reducers/reducerContact";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerContact,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
