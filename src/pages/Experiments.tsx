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
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ExperimentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ExperimentCard = styled(motion.div)`
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => `${theme.colors.primary}22`};
  }
`;

const ExperimentTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ExperimentDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.text};
`;

const Experiments: React.FC = () => {
  const experiments = [
    {
      id: 1,
      title: '3D Scene',
      description: 'Interactive 3D scene built with React Three Fiber and Framer Motion.',
      component: <HeroScene />
    },
    {
      id: 2,
      title: 'Coming Soon',
      description: 'More experiments are on the way. Stay tuned!',
      component: null
    }
  ];

  return (
    <Container>
      <Content>
        <Title>Experiments</Title>
        <Description>
          Explore our collection of interactive experiments and creative coding projects.
        </Description>
        <ExperimentGrid>
          {experiments.map((experiment) => (
            <ExperimentCard
              key={experiment.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExperimentTitle>{experiment.title}</ExperimentTitle>
              <ExperimentDescription>{experiment.description}</ExperimentDescription>
              {experiment.component && (
                <div style={{ height: '200px', marginTop: '1rem' }}>
                  {experiment.component}
                </div>
              )}
            </ExperimentCard>
          ))}
        </ExperimentGrid>
      </Content>
    </Container>
  );
};

export default Experiments; 