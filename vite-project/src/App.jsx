// import Greet from './components/Greet.jsx';
// import Add from './components/Add.jsx';
// import Header from './components/Header.jsx';
// import MainContent from './components/MainContent.jsx';
// import Footer from './components/Footer.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import JSXRULES from './components/JSXRULES.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import Greetings from './components/Greetings.jsx';


const App = () => {
  return (
    <section id="section">
      <h1>My Website</h1>
      <JSXRULES />
      <WelcomeMessage />
      <article>
        <h2>Welcome to my website</h2>
        <p className="text">This is a simple website built with React and Vite.</p>
      </article>
      <ProductInfo />
      <Greetings />
    </section>
  );
};

export default App;