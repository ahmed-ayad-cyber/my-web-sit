import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MePhoto from './component/1-MePhoto/MePhoto';
import About from './component/2-About/About'
import Skills from './component/3-skills/Skills'
import Portfolio from "./component/4-portfolio/Portfolio";
import Contact from "./component/5-Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <MePhoto />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
