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
  color: ${({ theme }) => theme.colors.text};
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

const ProjectTitle = styled.h2`
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

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const projects = [
  {
    id: 1,
    title: 'Virtual Playground',
    description:
      'An interactive web application showcasing creative experiments and 3D visualizations.',
    tags: ['React', 'TypeScript', 'Three.js', 'Framer Motion'],
    link: 'https://github.com/pranit2510/virtual-playground',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A modern portfolio website built with React and styled-components.',
    tags: ['React', 'TypeScript', 'styled-components'],
    link: 'https://github.com/pranit2510/portfolio',
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A weather application that displays current weather and forecasts.',
    tags: ['React', 'TypeScript', 'OpenWeather API'],
    link: 'https://github.com/pranit2510/weather-app',
  },
];

const Projects: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Projects</Title>
        <Grid>
          {projects.map((project) => (
            <Card
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <div>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </Card>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Projects; 