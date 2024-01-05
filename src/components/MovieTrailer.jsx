import { useSelector } from "react-redux"

const MovieTrailer = ({className}) => {

  const movieTrailer = useSelector(state => state.movie.topRatedMovieTrailerKey)

  return (
    <div className={className}>
      <iframe className="w-full aspect-video border-0" src={"https://www.youtube.com/embed/"+ movieTrailer +"?si=2gilLdQn0g-KhboQ&autoplay=1&mute=1&loop=1&controls=0&playlist=" + movieTrailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default MovieTrailer
