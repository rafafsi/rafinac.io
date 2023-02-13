import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Projects from "./components/views/Projects";
import Contact from "./components/views/Contact";
import Footer from "./components/layout/Footer";
import About from "./components/views/About";
import { ProjectProvider } from "./components/context/ProjectContext";

const App = () => {
  return (
    <Router>
      <Nav />
      <div>
        <ProjectProvider>
          <Routes>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Routes>
        </ProjectProvider>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

