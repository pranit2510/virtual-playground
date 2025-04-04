import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  as?: React.ElementType;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ size = 'md', theme }) =>
    size === 'sm'
      ? `${theme.spacing.xs} ${theme.spacing.sm}`
      : size === 'md'
      ? `${theme.spacing.sm} ${theme.spacing.md}`
      : `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ size = 'md', theme }) =>
    size === 'sm'
      ? theme.typography.body
      : size === 'md'
      ? theme.typography.h3
      : theme.typography.h2};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  background-color: ${({ variant = 'primary', theme }) =>
    variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${({ variant = 'primary', theme }) =>
    variant === 'primary' ? '#ffffff' : theme.colors.primary};
  border: ${({ variant = 'primary', theme }) =>
    variant === 'secondary' ? `2px solid ${theme.colors.primary}` : 'none'};

  &:hover {
    background-color: ${({ variant = 'primary', theme }) =>
      variant === 'primary'
        ? theme.colors.secondary
        : `${theme.colors.primary}22`};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<ButtonProps> = ({ children, to, ...props }) => {
  if (to) {
    return (
      <StyledButton as={Link} to={to} {...props}>
        {children}
      </StyledButton>
    );
  }

  return <StyledButton {...props}>{children}</StyledButton>;
}; 