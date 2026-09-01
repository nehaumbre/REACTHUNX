const GreenClick = () => {
  alert("You Clicked GREEN");
}
const handleClick = ()=> {
    alert(Math.round(Math.random()*10))
}
const ClickMeComponent = () => {
  return (
    <div>
      <button style={{ backgroundColor: "red"}} onClick= {()=> alert ("You Clicked RED")}>Click ME</button>
      <button style={{ backgroundColor: "green"}} onClick= {GreenClick}>Click ME</button>
      <button style={{ backgroundColor: "blue"}} onClick= {handleClick}>Click ME</button>
      <Copy/>
      <Move/>
    </div>
  )
}

const Copy = () => {
    const copyHandler = () => {
        alert("You Copied the text");
    }
    return (
      <p onCopy={copyHandler}>
        This is a simple component that demonstrates the use of event handling
        onCopy in React.
      </p>
    );
}


const Move = ()=>{
    return (
        <p onMouseMove={()=> alert("You moved the mouse over the text")}>
            This is a simple component that demonstrates the use of event handling onMouseMove in React.
        </p>
    )
}
export default ClickMeComponent
