const Cold = () => <h2>It's cold outside. Bundle up!</h2>;
const Warm = () => <h2>It's warm outside. Enjoy the sunshine!</h2>;
const Hot = () => <h2>It's hot outside. Stay hydrated!</h2>;

const Weather = ({ temperature }) => {

     
    return (
        <div>
            {
                temperature <= 15 ? <Cold/> : temperature > 15 && temperature <25 ? <Warm/> : <Hot/>
            }
        </div>
    )
}

export default Weather
