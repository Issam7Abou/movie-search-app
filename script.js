const apiUrl = 'http://www.omdbapi.com/?apikey=4f8f00d1&t=';
let name1;

// func that is lanched when the user searches for movie
function showMovie() {
  const userInput = document.getElementById('userInput').value;
  // Hide Search UI
  const div = document.querySelector('.search-container');
  div.style.display = 'none';
  // Call fetchData to get movie from API
  fetchData(userInput)
}

const fetchData = async function(arg) {
  const response = await fetch(`${apiUrl}${arg}`);
  const data = await response.json();
  console.log(data);
  buildUI(data)
}

function buildUI(data) {
  const title = document.querySelector('h2');
  title.textContent = data.Title;
  const img = document.querySelector('img');
  img.src = data.Poster;
  const sinopse = document.querySelector('p');
  sinopse.textContent = `SINOPSE: ${data.Plot}`;
}


//On load