
const AnimeReview = ({anime}) => {
  return (
    <div>
      <h2>Anime Review: Passing a simple string as a prop</h2>
      <p>
        {anime.title} is a {anime.genre} anime
        with {anime.episodes} episodes.
      </p>
      <hr />
      <p>
        props are just data passed from a parent component to a child component.
        "AnimeCard, I'm giving you this anime. You take responsibility for
        presenting the anime information." data ownership is in the parent, but
        the responsibility for displaying that data is in the child.
        "AnimeReview, here is the review. Your job is to display it as an anime
        review."
        <ul>
          <li>
            <strong>Parent</strong> decides WHAT data the child gets.{" "}
          </li>
          <li>
            <strong>Child</strong> decides WHAT TO DO with that data.
          </li>
        </ul>
        <p>
          the child doesn't have to only display it. It can also use the prop to
          make decisions, calculate things, render conditionally, pass it
          further down, etc. But the child generally shouldn't mutate the
          parent's data directly
        </p>
      </p>
    </div>
  );
}

export default AnimeReview
