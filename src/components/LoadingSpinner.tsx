import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => `${theme.colors.primary}22`};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.body};
`;

export const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
}; 