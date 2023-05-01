import React from "react";
import { directors } from "../data";
//console.log(directors)

function Directors() {
  const alldirectors = directors.map((director)=>{
    const movies = director.movies.map((list)=>{
      return <li key={list}>{list}</li>
    })
    return(
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Director's page</h1>
    {alldirectors}
  </div>;
}

export default Directors;
