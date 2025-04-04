import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%;
`;

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.primary.glow};
  border-top: 3px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LoadingText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

interface LoadingProps {
  text?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <LoadingContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: fullScreen ? 'fixed' : 'relative',
        top: fullScreen ? 0 : 'auto',
        left: fullScreen ? 0 : 'auto',
        right: fullScreen ? 0 : 'auto',
        bottom: fullScreen ? 0 : 'auto',
        zIndex: fullScreen ? 1000 : 'auto',
        background: fullScreen ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
      }}
    >
      <Spinner variants={spinnerVariants} animate="animate" />
      <LoadingText variants={itemVariants}>{text}</LoadingText>
    </LoadingContainer>
  );
}; 