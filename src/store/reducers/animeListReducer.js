const animeListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "UPDATE_ANIME":
      return {
        ...state,
        animeList: payload.animeList,
        page: payload.page,
        searchText: payload.searchText,
        fetching: false,
        errorMessage: "",
        lastPage: payload.lastPage
      };

    case "LOAD_MORE":
      return {
        ...state,
        animeList: [...state.animeList, ...payload.animeList],
        page: state.page + 1,
        fetching: false,
        errorMessage: "",
      };

    case "FETCHING":
      return {
        ...state,
        fetching: true,
        errorMessage: "",
      };
    case "UNSUCCESSFULL_REQUEST":
      return {
        ...state,
        animeList: [],
        page: 0,
        fetching: false,
        errorMessage: "Seach should be valid. Try atleast with 3 words.",
      };
    default:
      return state;
  }
};

export default animeListReducer;
