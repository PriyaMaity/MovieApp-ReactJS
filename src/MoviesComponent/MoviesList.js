import React, { useEffect, useState } from "react";
import MovieCard from "./Movies";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div style={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "block",
    padding: "20px",
    backgroundColor: "#121212",
  },
};

export default MoviesList;
