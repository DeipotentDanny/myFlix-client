import React from 'react';

import { MovieCard } from '../movie-card/movie-card';

import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          "_id": { "$oid": "610d6f14388fb37c75e1308d" },
          "Title": "Iron Man",
          "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
          "ImagePath": "https://myflixdd.herokuapp.com/imgs/ironMan.jpg"
        },
        {
          "_id": { "$oid": "610d797d388fb37c75e13095" },
          "Title": "The Help",
          "Description": "Updated Version: An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
          "ImagePath": "https://myflixdd.herokuapp.com/imgs/theHelp.jpg"
        },
        {
          "_id": { "$oid": "610d7996388fb37c75e13096" },
          "Title": "Shindler's List",
          "Description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
          "ImagePath": "https://myflixdd.herokuapp.com/imgs/schindlersList.jpg"
        }
      ],
      selectedMovie: null
    }
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;


    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}
