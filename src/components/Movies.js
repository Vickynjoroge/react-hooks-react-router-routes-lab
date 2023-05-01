import React from "react";
import { movies } from "../data";
// console.log(movies)

function Movies() {
  const allMovies = movies.map((movie) => {
    const list = movie.genres.map((mov) => {
      return <li key={mov}>{mov}</li>
    })
    return(
      <div key={movie.title}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {list}
        </ul>
      </div>
    )
  })
 
  return <div>
      <h1>Movies page</h1>
      {allMovies}
    </div>
  
}
console.log(Movies);
export default Movies;
