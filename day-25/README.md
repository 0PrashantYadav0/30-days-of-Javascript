
# Movie Reel Search Application

This project allows users to search for movies and view detailed information about them by making API calls to the [OMDb API](http://www.omdbapi.com/). Users can search by entering a movie title, and the app displays a list of related movies. Clicking on any movie provides additional details.

## Features

- **Search movies**: Enter a keyword and find a list of movies related to the search input.
- **Display movie details**: Click on any movie to view additional information like its release year, genre, director, and more.
- **Responsive UI**: Clean and responsive user interface to display movie reels in card format.

## Technologies Used

- **HTML**: Structure and layout of the webpage.
- **CSS**: Styling the movie cards and layout.
- **JavaScript (ES6)**: For making API requests and dynamically rendering movie data.

## Project Structure

- `index.html`: Contains the main structure of the web page.
- `style.css`: Styles the movie cards and other visual elements.
- `script.js`: Contains all the JavaScript logic, including fetching and displaying movie data from the API.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/movie-reel-search.git
   cd movie-reel-search
   ```

2. **API Key**:
   - Visit [OMDb API](http://www.omdbapi.com/apikey.aspx) to get your free API key.
   - Replace the `apikey` in the `script.js` file with your own key:
     ```javascript
     const apikey = "your_api_key_here";
     ```

3. **Open `index.html` in your browser**.

4. **Search for movies**:
   - Type a movie name into the input box and click "Search". The application will fetch the results and display them as movie cards.

5. **View Movie Details**:
   - Click on any movie card to see detailed information, such as the plot, director, actors, and awards.

## Example

When a user searches for a movie like "Batman", the API fetches data and displays movie cards with the following information:

- Poster image
- Title
- Year of release
- Type (movie/series/game)

Clicking on any of the cards will fetch more detailed information like the plot, genre, director, and actors.

## Code Explanation

### JavaScript Logic

1. **Movie Search API Call**:
   ```javascript
   async function getAllMovie(movie) {
     try {
       const res = await fetch(`https://omdbapi.com/?s=${movie}&apikey=${apikey}&?page=1`);
       const data = await res.json();
       if (data.Error) {
         return [];
       }
       return data.Search;
     } catch (error) {
       console.log(error, "error");
     }
   }
   ```

2. **Display Movie Results**:
   - After fetching the search results, the app dynamically generates HTML for each movie card.
   ```javascript
   function createHtmlForMovies(arrOfMovies) {
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
       </div>`;
     });
     return htmlData;
   }
   ```

3. **Handle Movie Click Event**:
   - When the user clicks on a movie card, it fetches more detailed information about the movie.
   ```javascript
   const handleClickOnDiv = async () => {
     const id = id;
     try {
       document.querySelector('.body-card').innerHTML = `<h1>Loading.......</h1>`;
       const res = await fetch(`https://omdbapi.com/?i=${id}&apikey=${apikey}`);
       const data = await res.json();
       displayMovieDetails(data);
     } catch (error) {
       console.log(error);
     }
   };
   ```

4. **Display Movie Details**:
   - This function updates the DOM with the detailed movie data:
   ```javascript
   function displayMovieDetails(data) {
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
   }
   ```

## Future Improvements

- **Pagination**: Support for displaying more than 10 results by adding pagination.
- **Search Filters**: Allow users to filter results by year, genre, or rating.
- **UI Enhancements**: Improve the UI with more engaging animations and styles.
