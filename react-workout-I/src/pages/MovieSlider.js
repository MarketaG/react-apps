import dataMovies from "../data/dataMovies"
import { useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./MovieSlider.css"

export const MovieSlider = () => {
  const [index, setIndex] = useState(0)
  const { image, title, description } = dataMovies[index]

  const chechMovieNumber = (movieIndex) => {
    if (movieIndex < 0) {
      return dataMovies.length - 1
    } else if (movieIndex > dataMovies.length - 1) {
      return 0
    } else {
      return movieIndex
    }
  }

  const nextMovie = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return chechMovieNumber(newIndex)
    })
  }

  const previousMovie = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return chechMovieNumber(newIndex)
    })
  }

  return (
    <div className="wrapper-one-movie">
      <div className="content-one-movie">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={previousMovie}>
          <FaArrowAltCircleLeft className="slider-button" />
        </button>
        <button onClick={nextMovie}>
          <FaArrowAltCircleRight className="slider-button" />
        </button>
      </div>
    </div>
  )
}
export default MovieSlider