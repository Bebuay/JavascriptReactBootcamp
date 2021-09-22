// Api URL 
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=37099dc2aa00c709cc4698e0c8db6caa&sort_by=popularity.desc";
const IMAGE_URL="https://image.tmdb.org/t/p/w300";
// Fetch Api
function getMoviesData(url) {
    fetch(url)
    .then(response => response.json())
    .then(data=> showDataToUI(data.results))
}
getMoviesData(BASE_URL);

//Add data result to ui from api
const movieContainerRow = document.getElementById("movie-container-row");
function showDataToUI(movies){
    //Add Tabindex All Movie
    var tabindex=0;
    movieContainerRow.innerHTML += movies.map((movie)=>{
        let releaseDate = movie.release_date.slice(0,4);
        let voteAverage = movie.vote_average;
        tabindex++;
        // Add To Different Class Tag Name For Vote Point
        if(voteAverage>7)   {
            //It is my movie's div structure
            return `<div class="col" tabindex="${tabindex}">
                        <img class="movie-image" src="${IMAGE_URL+movie.poster_path}"></a> 
                        <h2 class="movie-title">${movie.title}</h2>
                        <p class="vote-average-green">${movie.vote_average}</p>
                        <p class="release-date">${releaseDate}</p>
                    </div>`
        }
        else if(voteAverage>5)  {
            return  `<div class="col" tabindex="${tabindex}">
                        <img class="movie-image" src="${IMAGE_URL+movie.poster_path}"></a> 
                        <h2 class="movie-title">${movie.title}</h2>
                        <p class="vote-average-blue">${movie.vote_average}</p>
                        <p class="release-date">${releaseDate}</p>
                     </div>`
        }
        else {
            return  `<div class="col" tabindex="${tabindex}">
                        <img class="movie-image" src="${IMAGE_URL+movie.poster_path}"></a> 
                        <h2 class="movie-title">${movie.title}</h2>
                        <p class="vote-average-red">${movie.vote_average}</p>
                        <p class="release-date">${releaseDate}</p>
                     </div>`
        }
    }).join("");
}


//Filter Movie With Search Button

const search = document.getElementById("search-text");
search.addEventListener("keyup",filter); //Add keyup event search input
function filter() {
    const searchValue= search.value.toLowerCase();
    const newElements= document.querySelectorAll(".col");
    newElements.forEach(function(element) {
        const text = element.textContent.toLocaleLowerCase();
        if(text.indexOf(searchValue)==-1){ //Check search value in movies title text
            element.style.display="none";   
        }
        else {
            element.style.display="block";
        }
    });
}