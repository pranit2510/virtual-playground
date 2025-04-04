import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3d/HeroScene';

const Container = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: calc(${({ theme }) => theme.spacing.xl} * 3);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.h3};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 500px;
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  overflow: hidden;
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Virtual Playground
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore interactive experiments and creative coding projects in this
          digital sandbox. Dive into a world of 3D graphics, animations, and
          immersive experiences.
        </Description>
        <Button
          as="a"
          href="/experiments"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Exploring
        </Button>
        <HeroContainer>
          <HeroScene />
        </HeroContainer>
      </Content>
    </Container>
  );
};

export default Home;
