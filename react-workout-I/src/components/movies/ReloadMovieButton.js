import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
  return (
    <button
      className="reload-movie-button" onClick={props.reloadMovies}>Obnovit vše</button>
  )
}

export default ReloadMovieButton