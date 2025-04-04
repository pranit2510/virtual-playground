import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${({ theme }) => theme.colors.primary.main};
        color: white;
        &:hover {
          background: ${({ theme }) => theme.colors.primary.light};
          box-shadow: ${({ theme }) => theme.shadows.glow};
        }
      `;
    case 'secondary':
      return css`
        background: ${({ theme }) => theme.colors.secondary.main};
        color: white;
        &:hover {
          background: ${({ theme }) => theme.colors.secondary.light};
          box-shadow: ${({ theme }) => theme.shadows.glow};
        }
      `;
    case 'outline':
      return css`
        background: transparent;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.main};
        &:hover {
          background: ${({ theme }) => theme.colors.primary.main};
          color: white;
        }
      `;
    case 'ghost':
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.text.light};
        &:hover {
          background: ${({ theme }) => theme.colors.primary.glow};
          color: ${({ theme }) => theme.colors.primary.main};
        }
      `;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.typography.fontSize.sm};
      `;
    case 'md':
      return css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.typography.fontSize.base};
      `;
    case 'lg':
      return css`
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.typography.fontSize.lg};
      `;
  }
};

const StyledButton = styled(motion.button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  position: relative;
  overflow: hidden;

  ${({ variant = 'primary' }) => getVariantStyles(variant)}
  ${({ size = 'md' }) => getSizeStyles(size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .loading-spinner {
    position: absolute;
    right: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {leftIcon && <span className="left-icon">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="right-icon">{rightIcon}</span>}
      {isLoading && (
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          ⭕
        </motion.div>
      )}
    </StyledButton>
  );
}; 