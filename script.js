// Variables for HTML tags
const apiUrl = 'http://www.omdbapi.com/?apikey=4f8f00d1&t=';
const div = document.querySelector('.search-container');
const div2 = document.querySelector('.showResult');
const result = document.querySelector('.result');
const title = document.querySelector('.movie-title');
const img = document.querySelector('.banner');
const director = document.querySelector('.director');
const time = document.querySelector('.run-time');
const rating = document.querySelector('.ratingImdb');
const sinopse = document.querySelector('.sinopse');

// func that is lanched when the user searches for movie
function showMovie() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.length >= 3) {
    // Hide Search UI & Show Result UI
    div.style.display = 'none';
    div2.style.display = 'flex';
    // Call func to show TRENDING MOVIES
    trendingMovies();
    // Call fetchData to get movie from API
    fetchData(userInput)
  }
}

//fetch data from api and search the movie by the User
const fetchData = async function(arg) {
  const response = await fetch(`${apiUrl}${arg}`);
  const data = await response.json();
  console.log(data)
  buildUI(data)
}

// build the UI to show movie
function buildUI(data) {
  // Build Movie UI information
  title.textContent = data.Title;
  img.src = data.Poster;
  director.textContent = data.Director;
  time.textContent = data.Runtime;
  rating.textContent = data.imdbRating;
  sinopse.textContent = data.Plot;
  // Background Movie UI
  result.style.backgroundImage = `url(${data.Poster})`;
}

//function that fires the showMovie() when the key 'Enter' is pressed in the userInput
function handleKeyPress(event) {
  const userInput = document.getElementById('userInput').value;
  event.keyCode === 13 && userInput.length >= 3 ? showMovie() : null;
}

// Returns to Home Page from the result movie/serie
function returnBtn() {
  div2.style.display = 'none';
  div.style.display = 'flex';
}

// Func that display TRENDING MOVIES
async function trendingMovies() {
  const api = 'http://www.omdbapi.com/?apikey=4f8f00d1&s=movie&type=movie&y=2023';
  const response = await fetch(api);
  const data = await response.json();
  console.log(data.Search);
  // Build the UI
  for (let i = 1; i <= 5; i++) {
    const movieImgSrc = document.querySelector(`.movie-${i} img`);
    movieImgSrc.src = data.Search[i].Poster;
  }
}

//On load
trendingMovies();