// TEST
const api = 'http://www.omdbapi.com/?apikey=&s=popular';
const popularMovies = async function(arg) {
  const response2 = await fetch(arg);
  const data2 = await response2.json();
  console.log(data2.Search[0]);
}

popularMovies(api);

// TEST

const apiUrl = 'http://www.omdbapi.com/?apikey=&t=';
let div = document.querySelector('.search-container');
let div2 = document.querySelector('.showResult');

// func that is lanched when the user searches for movie
function showMovie() {
  const userInput = document.getElementById('userInput').value;
  // Hide Search UI
  div.style.display = 'none';
  div2.style.display = 'flex';
  // Call fetchData to get movie from API
  fetchData(userInput)
}

//fetch data from api and search the movie by the User
const fetchData = async function(arg) {
  const response = await fetch(`${apiUrl}${arg}`);
  const data = await response.json();
  buildUI(data)
}

// build the UI to show movie
function buildUI(data) {
  const title = document.querySelector('.movie-title');
  title.textContent = data.Title;
  const img = document.querySelector('.banner');
  img.src = data.Poster;
  const director = document.querySelector('.director');
  director.textContent = data.Director;
  const time = document.querySelector('.run-time');
  time.textContent = data.Runtime;
  const rating = document.querySelector('.ratingImdb');
  rating.textContent = data.imdbRating;
  const sinopse = document.querySelector('.sinopse');
  sinopse.textContent = data.Plot;
}

function returnBtn() {
  div2.style.display = 'none';
  div.style.display = 'flex';
}

//On load