const apiUrl = 'http://www.omdbapi.com/?apikey=4f8f00d1&t=';
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
  console.log(data);
  buildUI(data)
}

// build the UI to show movie
function buildUI(data) {
  const title = document.querySelector('h2');
  title.textContent = data.Title;
  const img = document.querySelector('img');
  img.src = data.Poster;
  const sinopse = document.querySelector('p');
  sinopse.textContent = `SINOPSE: ${data.Plot}`;
}

function returnBtn() {
  div.style.display = 'flex';
  const userInput = document.getElementById('userInput');
  userInput.value = '';
}

//On load