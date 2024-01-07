import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SearchMovieList = () => {

  const searchChar = useSelector(state => state.movie.searchedMovie)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchChar === "") navigate("/")
  }, [searchChar])

  return (
    <div className="py-10">
      <p className="text-white text-4xl text-center font-semibold">{searchChar}</p>
    </div>
  )
}

export default SearchMovieList
