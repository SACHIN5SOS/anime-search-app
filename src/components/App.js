import { React } from "react";
import "./App.css";
import AnimeList from "./AnimeList/AnimeList";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <div className="container">
      <SearchBar />
      <AnimeList />
    </div>
  );
}


export default App;
