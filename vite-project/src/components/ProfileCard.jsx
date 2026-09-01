const ProfileCard = () => {
  const cardStyle = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black"
  };

  return (
    <div style={cardStyle}>
      <h1>Profile Card (style Object)</h1>
      <p>This is a simple profile card component.</p>
    </div>
  )
}

export default ProfileCard
