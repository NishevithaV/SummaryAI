import { Hero, Main, Footer } from '../src/components'
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <div className="background"></div>
      <div className="main">
        <Hero />
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
