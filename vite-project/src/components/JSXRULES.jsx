const JSXRULES = () => {
    const myName = "John Doe";
    const add = (a,b) => a + b;
    const specialClass = "special-text-i";


  return (
    <div>
      <h1>JSX Rules</h1>
      <p>
        JSX is a syntax extension for JavaScript that allows you to write
        HTML-like code in your React components. Here are some important rules
        to keep in mind when using JSX:
      </p>
      <ul>
        <li>
          JSX must have a single parent element. You can wrap multiple elements
          in a div or a React fragment.
        </li>
        <li>JSX elements must be properly closed </li>
        <li>
          JSX attributes must be written in camelCase. For example, use
          className instead of class.
        </li>
      </ul>
      <p>
        JSX lets you write expressions inside curly braces {"{2+2}"}: {2 + 2}
      </p>
      <div>
        <h1>{myName}</h1>
        <p>The sum of 2 and 3 is: {add(2, 3)}</p>
        <p className={specialClass}>This is a special text</p>
      </div>
    </div>
  );
}

export default JSXRULES
