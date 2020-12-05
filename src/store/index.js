import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import animeListReducer from "./reducers/animeListReducer";

const InitialStates = {
  animeList: [],
  searchText: "",
  page: 0,
  fetching: false,
  errorMessage: "",
  lastPage: 0,
};

const store = createStore(
  animeListReducer,
  InitialStates,
  applyMiddleware(thunk),
);

export default store;
