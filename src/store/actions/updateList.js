import axios from "axios";

const fetchAnime = (keyword, page) => {
  return axios(
    `https://api.jikan.moe/v3/search/anime?q=${keyword}&limit=16&page=${page}`
  );
};

const update_anime = (keyword, page, type) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING" });
    fetchAnime(keyword, page)
      .then((res) => res.data)
      .then((res) => {
        return dispatch({
          type: type,
          payload: {
            animeList: res.results,
            searchText: keyword,
            page: page,
            lastPage: res.last_page
          },
        });
      })
      .catch(() => dispatch({ type: "UNSUCCESSFULL_REQUEST" }));
  };
};

export default update_anime;
