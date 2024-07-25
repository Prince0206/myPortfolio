
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (
    <div className=" ">
    <div className=" font-test px-6 sm:px-10 lg:px-[165px] bg-primary-dark text-primary-white">
      <Header />
      <Hero />
      <Skills />
      <Projects/>
 
    </div>
    <Contact/>
    <Footer/>
    </div>

  );
}

export default App;
