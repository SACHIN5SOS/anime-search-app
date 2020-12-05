import React from "react";
import { connect } from "react-redux";
import update_anime from "../../store/actions/updateList";
import "./AnimeList.css";

const AnimeList = ({
  animeList,
  searchText,
  page,
  updateAnime,
  fetching,
  errorMessage,
  lastPage,
}) => {
  const loadMoreAnime = () => {
    updateAnime(searchText, page + 1, "LOAD_MORE");
  };

  return (
    <>
      <div className="anime-list-container">
        <>
          {!searchText && (
            <div
              style={{ color: "#fff", fontWeight: "700", marginTop: "30px" }}
            >
              Search Anything related to Anime.
            </div>
          )}
          {!!errorMessage ? (
            <>
              <div
                style={{ color: "#fff", fontWeight: "700", marginTop: "30px" }}
              >
                {errorMessage}
              </div>
            </>
          ) : (
            <>
              {animeList.map((anime) => (
                <div className="anime-card" key={anime.mail_id}>
                  <div className="anime-card--image">
                    <img src={anime.image_url} />
                  </div>
                  <div className="anime-card--title">
                    <span>{anime.title}</span>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      </div>
      {fetching && (
        <div style={{ color: "#fff", fontWeight: "700" }}>Fetching data...</div>
      )}
      {page > 0 && page !== lastPage && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <button
            disabled={fetching}
            className="btn-loadmore"
            onClick={loadMoreAnime}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    animeList: state.animeList,
    searchText: state.searchText,
    page: state.page,
    fetching: state.fetching,
    errorMessage: state.errorMessage,
    lastPage: state.lastPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnime: (searchText, page, type) =>
      dispatch(update_anime(searchText, page, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList);
