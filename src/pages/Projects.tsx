import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
}

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const projects: Project[] = [
  {
    id: 1,
    title: '3D Interactive Scene',
    description: 'A dynamic 3D environment built with Three.js and React Three Fiber.',
    image: '/images/project1.jpg',
    tags: ['Three.js', 'React', 'WebGL'],
    fullDescription: `
      This project showcases the power of 3D web graphics using Three.js and React Three Fiber.
      Users can interact with various 3D objects, explore different lighting conditions, and
      experience realistic physics simulations. The scene is optimized for performance and
      includes features like dynamic shadows, post-processing effects, and responsive controls.
    `,
  },
  {
    id: 2,
    title: 'Responsive Portfolio',
    description: 'A modern portfolio website with smooth animations and dark mode support.',
    image: '/images/project2.jpg',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    fullDescription: `
      A fully responsive portfolio website that showcases modern web development practices.
      Built with React and styled-components, it features smooth animations powered by
      Framer Motion, dark mode support, and a clean, minimalist design. The site is
      optimized for all devices and includes accessibility features.
    `,
  },
  {
    id: 3,
    title: 'Interactive UI Components',
    description: 'A collection of reusable UI components with advanced animations.',
    image: '/images/project3.jpg',
    tags: ['TypeScript', 'React', 'Animation'],
    fullDescription: `
      This library contains a set of highly customizable UI components built with
      TypeScript and React. Each component is designed with animation in mind,
      providing smooth transitions and interactive feedback. The library includes
      form elements, navigation components, modals, and more.
    `,
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectsContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Our Projects</Title>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      {selectedProject && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.fullDescription}</p>
            <ProjectTags>
              {selectedProject.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </ProjectTags>
          </ModalContent>
        </Modal>
      )}
    </ProjectsContainer>
  );
};

export default Projects; 