import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1000;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.h3};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MenuItem = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.body};
  margin: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: ${({ theme }) => theme.spacing.sm} 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.h3};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <Logo to="/">Virtual Playground</Logo>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      <MenuLinks>
        <MenuItem to="/experiments">Experiments</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </ThemeToggle>
      </MenuLinks>
      {isOpen && (
        <MobileMenu>
          <MenuItem to="/experiments" onClick={() => setIsOpen(false)}>
            Experiments
          </MenuItem>
          <MenuItem to="/about" onClick={() => setIsOpen(false)}>
            About
          </MenuItem>
          <MenuItem to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </MenuItem>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </ThemeToggle>
        </MobileMenu>
      )}
    </Nav>
  );
};
