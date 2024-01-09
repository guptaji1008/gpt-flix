const highestRating = (list) => {
    let rating = 0;
    let index = 0;
    for (let i in list) {
      if (list[i].vote_average > rating) {
        rating = list[i].vote_average;
        index = i;
      }
    }
    return list[index];
  };

export default highestRating;