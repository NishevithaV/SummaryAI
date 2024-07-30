import Hero from '../src/components/Hero/Hero'
import Main from '../src/components/Main/Main'
import './App.css';

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="main">
        <Hero />
        <Main />
      </div>
    </div>
  );
}

export default App;
