import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 1rem 2rem;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
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
`;

const CloseButton = styled.button`
  position: absolute;
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

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Virtual Playground</Logo>
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