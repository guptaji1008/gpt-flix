const uniqueMoviesFunc = (list1, list2, list3, list4) => {
    let allMovieList = [...list1, ...list2, ...list3, ...list4];
    let uniqueMovies = [];
    for (let i in allMovieList) {
      if (!uniqueMovies.length) {
        uniqueMovies.push(allMovieList[i])
      } else {
        if (!uniqueMovies.map((m) => m.title).includes(allMovieList[i].title)) {
          uniqueMovies.push(allMovieList[i])
        }
      }
    }
    return uniqueMovies;
  };

export default uniqueMoviesFunc