import { MovieCard } from './MovieCard';
import '../styles/content.scss'

export function Content(props) {
  // Complete aqui
  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} key={movie.imdbID}/>
        ))}
      </div>
    </main>
  </div>
  )
}