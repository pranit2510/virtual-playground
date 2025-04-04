import React, { useState } from 'react';
<<<<<<< HEAD
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
=======
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
<<<<<<< HEAD
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background.light};
  backdrop-filter: blur(10px);
  transition: background-color ${({ theme }) => theme.transitions.default};
=======
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 1rem 2rem;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
<<<<<<< HEAD
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary.main};
=======
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
<<<<<<< HEAD
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
=======
  gap: 2rem;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

<<<<<<< HEAD
const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
=======
const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
<<<<<<< HEAD
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.light};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
=======
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
<<<<<<< HEAD
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.light};
=======
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
<<<<<<< HEAD
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.background.light};
    padding: ${({ theme }) => theme.spacing.xl};
    z-index: 1001;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
=======
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
`;

const CloseButton = styled.button`
  position: absolute;
<<<<<<< HEAD
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

export const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
=======
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDarkMode } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Virtual Playground</Logo>
<<<<<<< HEAD
        
        <NavLinks>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/about">About</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
          </ThemeToggle>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                ×
              </CloseButton>
              <MobileNavLinks>
                <NavLink to="/features">Features</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/about">About</NavLink>
                <ThemeToggle onClick={toggleTheme}>
                  {isDarkMode ? '🌞' : '🌙'}
                </ThemeToggle>
              </MobileNavLinks>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
}; 
=======
        <NavLinks>
          <NavLink to="/" $isActive={isActive('/')}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={isActive('/about')}>
            About
          </NavLink>
          <NavLink to="/projects" $isActive={isActive('/projects')}>
            Projects
          </NavLink>
          <NavLink to="/contact" $isActive={isActive('/contact')}>
            Contact
          </NavLink>
          <NavLink to="/3d" $isActive={isActive('/3d')}>
            3D Scene
          </NavLink>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? '🌞' : '🌙'}
        </ThemeToggle>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </CloseButton>
          <NavLink to="/" $isActive={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" $isActive={isActive('/about')} onClick={() => setIsMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" $isActive={isActive('/projects')} onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" $isActive={isActive('/contact')} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/3d" $isActive={isActive('/3d')} onClick={() => setIsMobileMenuOpen(false)}>
            3D Scene
          </NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
          </ThemeToggle>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navigation; 
>>>>>>> cd3820c6bbcd30e87455e24fb02a9ebda90e358a
