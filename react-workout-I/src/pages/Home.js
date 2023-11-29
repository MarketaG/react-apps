import { useState, useEffect } from "react"
import "./Home.css"
import allMovies from "../data/dataMovies"
import { SlMagnifier } from "react-icons/sl";

export const Home = () => {
  const [searchingText, setSearchingText] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
    const moviesAfterFilter = allMovies.filter((oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchingText.toLowerCase())
    })
    setFilteredMovies(moviesAfterFilter)
  }, [searchingText])

  return <div className="movies-box">
    <form action>
      <SlMagnifier className="filter-icon" />
      <input
        className="input-filter"
        type="text"
        placeholder="Hledaný film..."
        onChange={
          (event) => setSearchingText(event.target.value)
        }
      />

    </form>
    <div className="all-movies-filter">
      {filteredMovies.map((oneMovie) => {
        const { id, image, title, age, tags, description, category } = oneMovie

        return <div key={id} className="one-movie-filter">
          <img src={image} className="one-movie-filter-img" alt="" />
          <h2>{title}</h2>
          <p>{age}</p>
          <p>{tags}</p>
          <p>{description}</p>
          <p>Kategorie: {category}</p>
        </div>
      })}
    </div>
  </div>
}
export default Home