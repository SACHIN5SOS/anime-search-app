import React, { useRef } from "react";
import { connect } from "react-redux";
import update_anime from "../../store/actions/updateList";
import "./SearchBar.css";

const SearchBar = ({ animeList, page, updateAnime }) => {
  const searchRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAnime(searchRef.current.value, 1, "UPDATE_ANIME");
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
      <div className="search">
        <input ref={searchRef} placeholder="Search Anime..." type="text" />
        <button className="searchButton" type="button" onClick={handleSubmit}>
        <i class="fa fa-search"></i>
        </button>
        </div>
      </form>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    animeList: state.animeList,
    page: state.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAnime: (searchText, page, type) =>
      dispatch(update_anime(searchText, page, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
