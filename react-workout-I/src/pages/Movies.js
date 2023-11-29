import "./Movie.css"
import data from "../data/dataMovies"
import MovieDeleteButton from "../components/movies/MovieDeleteButton"
import { useState } from "react"
import AllDeleteButton from "../components/movies/AllDeleteButton"
import ReloadMovieButton from "../components/movies/ReloadMovieButton"

const Movies = () => {
  const [movieList, setMovieList] = useState(data)

  const deleteOneMovie = (idecko) => {
    const filteredMovies = movieList.filter((oneMovie) => { return oneMovie.id !== idecko })
    setMovieList(filteredMovies)
  }

  const deleteAllMovies = () => {
    setMovieList([])
  }

  const reloadAllMovies = (idecko) => {

    setMovieList(data)
  }

  return (
    <section>
      <div className="all-movies">
        {
          movieList.map((oneMovie) => {
            const { id, image, title, age, tags, description } = oneMovie

            return (
              <div className="one-movie" key={id}>
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p>{age}</p>
                <p>{tags}</p>
                <p>{description}</p>
                <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
              </ div>
            )
          })
        }
      </div>
      <div className="button-box">
        <AllDeleteButton deleteMovies={deleteAllMovies} />
        <ReloadMovieButton reloadMovies={reloadAllMovies} />
      </div>
    </section>
  )
}

export default Movies