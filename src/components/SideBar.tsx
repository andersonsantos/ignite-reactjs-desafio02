import { Button } from './Button';

export function SideBar(props) {
  // Complete aqui
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.genres.map(genre => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClickButton(genre.id)}
          selected={props.selectedGenreId === genre.id}
          key={genre.id}
        />
      ))}
    </div>

  </nav>
  )
}