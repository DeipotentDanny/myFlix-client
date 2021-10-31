import React from 'react'

import { Link } from 'react-router-dom';

function FavoriteMovieList(FavoriteMovies) {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {FavoriteMovies.map((movies) => {
        return (
          <div key={movies._id}>
            <img src={movies.imagepath} />
            <Link to={`/movies/${movies._id}`}>
              <h4>{movies.title}</h4>
            </Link>
            <Button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from Favorites</Button>
          </div>
        )
      })}
    </div>
  )
}

export default FavoriteMovieList
