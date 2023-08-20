import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About></About>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
