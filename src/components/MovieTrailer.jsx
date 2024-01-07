
const MovieTrailer = ({className, movieTrailer, mute}) => {

  return (
    <div className={className}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <iframe className="w-full aspect-video border-0" src={"https://www.youtube.com/embed/"+ movieTrailer +"?si=2gilLdQn0g-KhboQ&modestbranding=1&showinfo=0&autoplay=1&mute="+ mute +"&loop=1&controls=0&playlist=" + movieTrailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  )
}

export default MovieTrailer
