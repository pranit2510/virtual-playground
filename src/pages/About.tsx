import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
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

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CardText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutContainer>
      <Section
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        ref={ref}
      >
        <Title>About Virtual Playground</Title>
        <Content>
          <Card variants={fadeInUp}>
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              Virtual Playground is a space where creativity meets technology.
              We believe in pushing the boundaries of what's possible in the digital realm,
              creating immersive experiences that inspire and engage.
            </CardText>
          </Card>

          <Card variants={fadeInUp}>
            <CardTitle>Technology</CardTitle>
            <CardText>
              Built with cutting-edge technologies including React, Three.js, and WebGL,
              our platform showcases the potential of modern web development.
              We're constantly exploring new ways to enhance user experience through innovation.
            </CardText>
          </Card>

          <Card variants={fadeInUp}>
            <CardTitle>Experience</CardTitle>
            <CardText>
              Step into our virtual playground and discover a world of interactive
              3D environments, dynamic animations, and engaging user interfaces.
              Every element is crafted to provide a unique and memorable experience.
            </CardText>
          </Card>
        </Content>
      </Section>
    </AboutContainer>
  );
};

export default About; 