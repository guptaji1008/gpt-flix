
function debounce(fn, d) {
    let timer;
    return function(...args) {
        let context = this;
        clearTimeout(timer)
        timer = setTimeout(() => {
            return fn.apply(context, [...args])
        }, d)
    }
}

function movieSearched(movieName, movies) {
    let lowerCaseMovieName = movies.map((m) => ({...m, title: m.title.toLowerCase()}))
    let lowerCaseSearchMovieName = movieName.toLowerCase()
    lowerCaseMovieName = lowerCaseMovieName.filter((m) => m.title.includes(lowerCaseSearchMovieName));
    console.log(lowerCaseMovieName)
    console.log(lowerCaseSearchMovieName)
    return lowerCaseMovieName;
}

const searchMovieLogic = debounce(movieSearched, 400);

export default searchMovieLogic;