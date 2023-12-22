import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <h2>{movie.Plot}</h2>
      </div>

      <h2 className="dd">dd</h2>
    </div>
  );
};

export default MovieCard;
