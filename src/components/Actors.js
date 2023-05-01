import React from "react";
import { actors } from "../data";
//console.log(actors)

function Actors() {
  const allActors = actors.map((actor)=>{
    const actorMovie = actor.movies.map((movie)=>{
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={actor.name}>
        <h1>{actor.name}</h1>
        <ul>
          {actorMovie}
        </ul>
      </div>
    )
  })
  return <div>
      <h1>Actors' page</h1>
        {allActors}
  </div>;
}

export default Actors;
