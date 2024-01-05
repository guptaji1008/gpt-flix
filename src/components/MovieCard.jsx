
const MovieCard = ({ imageKey, className, alt }) => {
  return (
    <div className={"w-44 " + className}>
      <img className="w-full" src={`https://image.tmdb.org/t/p/w500${imageKey}`} alt={alt} />
    </div>
  )
}

export default MovieCard
