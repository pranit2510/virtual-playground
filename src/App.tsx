import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Scene3D from './components/3d/Scene3D';
<<<<<<< HEAD
import { ThemeProvider } from './context/ThemeContext';
=======
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

const App: React.FC = () => {
  return (
    <ThemeProvider>
<<<<<<< HEAD
      <Router basename="/virtual-playground">
=======
      <GlobalStyles />
      <Router>
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/3d" element={<Scene3D />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

<<<<<<< HEAD
export default App; 
=======
export default App;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
