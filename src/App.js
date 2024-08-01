import { Hero, Main, Footer } from '../src/components'
import './App.css';

function App() {
  return (
    <div>
      <div className="background"></div>
      <div className="main">
        <Hero />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
