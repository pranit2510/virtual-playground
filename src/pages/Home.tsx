import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3d/HeroScene';
import { Button } from '../components/Button';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <Content>
        <TextContent>
          <Title>Welcome to Virtual Playground</Title>
          <Description>
            Explore interactive 3D experiences and creative coding experiments
          </Description>
          <ButtonGroup>
            <Button
              to="/experiments"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Experiments
            </Button>
            <Button
              to="/about"
              variant="secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </Button>
          </ButtonGroup>
        </TextContent>
        <HeroContainer>
          <HeroScene />
        </HeroContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.text};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const HeroContainer = styled.div`
  flex: 1;
  height: 500px;
  position: relative;
`;

export default Home;
