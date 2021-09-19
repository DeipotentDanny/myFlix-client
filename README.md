# MyFlix - Client Side

## Description

The "MyFlix - Client Side" is a single-page, responsive application with routing, rich interactions, several interface
views, and a polished user experience. It is paired with the MyFLixDD external API creating a smooth running and navigable "Movie Database" application where a user can:
 
* Register as a New User and Create a User Profile
* Find info on a variety of movies, genres, directors, and actors
* Add/Remove movies to the User's "Favorite's" list

## Views and Features

### Main view
* Returns a list of ALL movies to the user (each listed item with an image, title, and description)
* Sorting and filtering
* Ability to select a movie for more details
### Single movie view
* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites
### Login view
* Allows users to log in with a username and password
* Registration view
* Allows new users to register (username, password, email, birthday)
### Genre view
* Returns data about a genre, with a name and description
* Displays example movies
### Director view
* Returns data about a director (name, bio, birth year, death year)
* Displays example movies
### Profile view
* Allows users to update their user info (username, password, email, date of birth)
* Allows existing users to deregister
* Displays favorite movies
* Allows users to remove a movie from their list of favorites

## Tech
* React
* React Redux
* Parcel
* Bootstrap
