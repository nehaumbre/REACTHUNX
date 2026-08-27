// PROPS: The parent owns the data. The parent passes the data through props. 
// The child receives the props and decides how to display that data.
const AnimeCard = ({ anime }) => {
  return (
    <div>
      <h1> Anime Card Component: Passing an object as a prop</h1>
      <ul>
        <li>Anime Name: {anime.title}</li>
        <li>Episodes: {anime.episodes}</li>
        <li>Genre: {anime.genre}</li>
      </ul>
    </div>
  );
}

export default AnimeCard
