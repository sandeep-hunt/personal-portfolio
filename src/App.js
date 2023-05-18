import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Projects/>
      <Testimonials/>
    </div>
  );
}

export default App;
