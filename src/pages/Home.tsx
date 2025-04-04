import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeroSection = styled(motion.section)`
  max-width: 800px;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Title variants={itemVariants}>
          Welcome to Virtual Playground
        </Title>
        <Subtitle variants={itemVariants}>
          Explore a world of interactive 3D experiences and creative possibilities.
          Dive into our virtual playground and discover the future of web development.
        </Subtitle>
        <motion.div variants={itemVariants}>
          <CTAButton to="/3d" whileHover={{ scale: 1.05 }}>
            Explore 3D Scene
          </CTAButton>
        </motion.div>
      </HeroSection>

      <FeatureGrid
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <FeatureCard variants={itemVariants}>
          <FeatureTitle>Interactive 3D</FeatureTitle>
          <FeatureDescription>
            Experience stunning 3D visualizations powered by Three.js and React Three Fiber.
            Interact with models and explore immersive environments.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard variants={itemVariants}>
          <FeatureTitle>Modern Design</FeatureTitle>
          <FeatureDescription>
            Enjoy a beautiful and responsive user interface built with React and
            styled-components. Dark mode support included for comfortable viewing.
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard variants={itemVariants}>
          <FeatureTitle>Smooth Animations</FeatureTitle>
          <FeatureDescription>
            Delight in fluid animations and transitions powered by Framer Motion.
            Every interaction feels natural and engaging.
          </FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </HomeContainer>
  );
};

export default Home; 