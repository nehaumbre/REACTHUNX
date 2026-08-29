const MorningGreeting = () => <h2>Good morning!</h2>;
const AfternoonGreeting = () => <h2>Good afternoon!</h2>;
const EveningGreeting = () => <h2>Good evening!</h2>;

const Greet = ({timeOfDay}) => {
    return timeOfDay === "morning" ? <MorningGreeting /> : timeOfDay === "afternoon" ? <AfternoonGreeting /> : timeOfDay === "evening" ? <EveningGreeting /> : <p>Hello!</p>;
}

export default Greet;