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
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
