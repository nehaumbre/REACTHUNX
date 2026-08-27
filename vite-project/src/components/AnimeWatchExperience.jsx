const AnimeWatchExperience = ({ anime }) => {
  let experience;

  if (anime.episodes >= 100) {
    experience = "Long commitment";
  } else if (anime.episodes >= 50) {
    experience = "Medium commitment";
  } else {
    experience = "Easy to binge";
  }

  return (
    <section style={{ border: "2px solid black", padding: "10px", marginBottom: "20px" }}>
      <h1>Anime Watch Experience</h1>
      <p>{experience}</p>
      <hr />
    </section>
  );
};

export default AnimeWatchExperience;
