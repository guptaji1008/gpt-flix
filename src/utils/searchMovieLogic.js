
let timer;
function debounce(fn, d) {
    return function(movieName, movies, callback) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            const results = fn.apply(null, [movieName, movies])
            callback(results)
        }, d)
    }
}

function movieSearched(movieName, movies) {
    let lowerCaseMovieName = movies.map((m) => ({...m, title: m.title.toLowerCase()}))
    let lowerCaseSearchMovieName = movieName.toLowerCase()
    lowerCaseMovieName = lowerCaseMovieName.filter((m) => m.title.includes(lowerCaseSearchMovieName));
    return lowerCaseMovieName.map((m) => ({ ...m, title: movies.find((mov) => mov.id === m.id).title }));
}

const searchMovieLogic = debounce(movieSearched, 400);

export default searchMovieLogic;