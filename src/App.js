import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=c4fb9d22";

// const movie1 = {
//   Title: "Batman & Robin",
//   Year: "1997",
//   imdbID: "tt0118688",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  // Event handler for keydown
  const handleKeyDown = (e) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.keyCode === 13) {
      // Call the searchMovies function with the current search term
      searchMovies(searchTerm);
    }
  };

  // Event handler for input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>ScreenVilla</h1>

      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        

        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
