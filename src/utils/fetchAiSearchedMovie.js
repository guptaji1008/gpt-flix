
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmY5NGUwZDNlM2YwZDcwMTdjMTk1YmZlMDdiNzc0YSIsInN1YiI6IjY1OTRkMjJmMGU2NGFmMGViNDhjMWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32Qtj5YfBJk2LXYPYruHB0Mvp3Hcka662Awb0d-lVGc'
  }
};

const fetchAiSearchedMovies = async (movieName) => {
    const result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, options)
    return result.json();
}

export default fetchAiSearchedMovies;