import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src="${Process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}"
          />
          <div className="Movie-date">release date : {movie.release_data}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    const query = await searchMovie(q);
    console.log({ query: query });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Moview</h1>
        <input
          placeholders="Find Movie Review..."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMoviesList />
        </div>
      </header>
    </div>
  );
};

export default App;
