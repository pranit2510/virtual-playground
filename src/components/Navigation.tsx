import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, currentTheme } = useTheme();

  return (
    <Nav theme={currentTheme}>
      <Logo to="/" theme={currentTheme}>Virtual Playground</Logo>
      <MenuButton onClick={() => setIsOpen(!isOpen)} theme={currentTheme}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            theme={currentTheme}
          >
            <MenuLinks>
              <MenuItem to="/" onClick={() => setIsOpen(false)} theme={currentTheme}>Home</MenuItem>
              <MenuItem to="/about" onClick={() => setIsOpen(false)} theme={currentTheme}>About</MenuItem>
              <MenuItem to="/projects" onClick={() => setIsOpen(false)} theme={currentTheme}>Projects</MenuItem>
              <MenuItem to="/contact" onClick={() => setIsOpen(false)} theme={currentTheme}>Contact</MenuItem>
              <MenuItem to="/3d" onClick={() => setIsOpen(false)} theme={currentTheme}>3D</MenuItem>
            </MenuLinks>
          </MenuOverlay>
        )}
      </AnimatePresence>
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </ThemeToggle>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.background};
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.text};
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-size: 2rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

export default Navigation;
