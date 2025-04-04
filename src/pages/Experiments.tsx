import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ExperimentTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h3};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  margin-right: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  font-size: 0.875rem;
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.text}88`};
  }
`;

const experiments = [
  {
    id: 1,
    title: '3D Particle System',
    description: 'Interactive particle system with Three.js and React Three Fiber.',
    tags: ['Three.js', 'React Three Fiber', '3D Graphics'],
  },
  {
    id: 2,
    title: 'Audio Visualizer',
    description: 'Real-time audio visualization using Web Audio API and Canvas.',
    tags: ['Web Audio API', 'Canvas', 'Animation'],
  },
  {
    id: 3,
    title: 'Physics Simulation',
    description: 'Interactive physics simulation with Matter.js.',
    tags: ['Matter.js', 'Physics', 'Animation'],
  },
  {
    id: 4,
    title: 'Shader Experiments',
    description: 'Collection of GLSL shader experiments with WebGL.',
    tags: ['WebGL', 'GLSL', 'Shaders'],
  },
];

const Experiments: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredExperiments = experiments.filter(
    (experiment) =>
      experiment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      experiment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      experiment.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Container>
      <Content>
        <Title>Experiments</Title>
        <Input
          type="text"
          placeholder="Search experiments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Grid>
          {filteredExperiments.map((experiment) => (
            <Card
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ExperimentTitle>{experiment.title}</ExperimentTitle>
              <Description>{experiment.description}</Description>
              <div>
                {experiment.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Experiments; 