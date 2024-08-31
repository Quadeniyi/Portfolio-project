import About from "./component/About";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
