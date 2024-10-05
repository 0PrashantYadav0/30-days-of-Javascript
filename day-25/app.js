const button = document.querySelector('button');
const input = document.querySelector("input");

const apikey = "";

async function getAllMovie(movie){
  try {
    const res = await fetch(`https://omdbapi.com/?s=${movie}&apikey=${apikey}&?page=1`);
    const data = await res.json();
    if(data.Error){
      return []
    }
    return data.Search
  } catch (error) {
    console.log(error, "error")
  }
}

function print(){
  console.log("print")
}

function createHtmlForMovies(arrOfMovies){
  let htmlData = "";
  arrOfMovies.map((movie) => {
    htmlData += `
    <div class="card" id="${movie.imdbID}" onclick='handleClickOnDiv()'>
      <div class="card-image-container">
        <img src="${movie.Poster}" alt="img" class="card-img">
      </div>
      <p class="card-title">${movie.Title}</p>
      <div class="details">
        <p class="year">${movie.Year}</p>
        <p class="type">${movie.Type}</p>
      </div>
    </div>
    `
  })
  return htmlData
}

const handleClickOnDiv = async () => {
const id = id;
  try {
    document.querySelector('.body-card').innerHTML = `<h1>Loading.......</h1>`
    const res = await fetch(`https://omdbapi.com/?i=${id}&apikey=7c93c6a3`);
    const data = await res.json();
    console.log(data)
    // movieDetail();
    // displayMovieDetails(data);
  } catch (error) {
    console.log(error)
  }
}

button.addEventListener('click', async () => {
  const movie = input.value;
  document.querySelector('.body-card').innerHTML = `<h1>Loading.......</h1>`
  const data = await getAllMovie(movie);
  document.querySelector('.body-card').innerHTML = createHtmlForMovies(data);
  // input.value = ""
})

function movieDetail(){
  const htmlData = `
  <div class="container">
    <div class="poster">
      <img id="moviePoster" src="" alt="Movie Poster">
    </div>
    <div class="details">
      <h1 id="movieTitle"></h1>
      <p><strong>Year:</strong> <span id="movieYear"></span></p>
      <p><strong>Rated:</strong> <span id="movieRated"></span></p>
      <p><strong>Released:</strong> <span id="movieReleased"></span></p>
      <p><strong>Runtime:</strong> <span id="movieRuntime"></span></p>
      <p><strong>Genre:</strong> <span id="movieGenre"></span></p>
      <p><strong>Director:</strong> <span id="movieDirector"></span></p>
      <p><strong>Writer:</strong> <span id="movieWriter"></span></p>
      <p><strong>Actors:</strong> <span id="movieActors"></span></p>
      <p><strong>Plot:</strong> <span id="moviePlot"></span></p>
      <p><strong>Language:</strong> <span id="movieLanguage"></span></p>
      <p><strong>Country:</strong> <span id="movieCountry"></span></p>
      <p><strong>Awards:</strong> <span id="movieAwards"></span></p>
      <p><strong>Box Office:</strong> <span id="movieBoxOffice"></span></p>
      <p><strong>Ratings:</strong></p>
      <ul id="movieRatings"></ul>
    </div>
  </div>
  `
  document.querySelector('.body-card').innerHTML = htmlData;

}

function displayMovieDetails(data) {
  console.log(data)
  document.getElementById("moviePoster").src = data.Poster;
  document.getElementById("movieTitle").innerText = data.Title;
  document.getElementById("movieYear").innerText = data.Year;
  document.getElementById("movieRated").innerText = data.Rated;
  document.getElementById("movieReleased").innerText = data.Released;
  document.getElementById("movieRuntime").innerText = data.Runtime;
  document.getElementById("movieGenre").innerText = data.Genre;
  document.getElementById("movieDirector").innerText = data.Director;
  document.getElementById("movieWriter").innerText = data.Writer;
  document.getElementById("movieActors").innerText = data.Actors;
  document.getElementById("moviePlot").innerText = data.Plot;
  document.getElementById("movieLanguage").innerText = data.Language;
  document.getElementById("movieCountry").innerText = data.Country;
  document.getElementById("movieAwards").innerText = data.Awards;
  document.getElementById("movieBoxOffice").innerText = data.BoxOffice;

  const ratingsList = document.getElementById("movieRatings");
  data.Ratings.forEach(rating => {
    const li = document.createElement("li");
    li.textContent = `${rating.Source}: ${rating.Value}`;
    ratingsList.appendChild(li);
  });
}
