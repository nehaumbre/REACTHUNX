const Greetings = () => {
  const date = new Date();
  const name = "John Doe";

  return (
    <div>
      <h1>Hello {name}! this is a greeting</h1>
      <p>Today is: {date.toDateString()}</p>
    </div>
  )
}

export default Greetings
