import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experiments from './pages/Experiments';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router basename="/virtual-playground">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiments" element={<Experiments />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
