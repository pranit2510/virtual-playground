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
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Section = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Text = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.typography.body};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>About Virtual Playground</Title>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <Text>
              Virtual Playground is a creative space where technology meets imagination.
              We explore the possibilities of modern web technologies through interactive
              experiments and immersive experiences.
            </Text>
          </Section>
          <Section>
            <SectionTitle>Technologies</SectionTitle>
            <List>
              <ListItem>React and TypeScript for robust frontend development</ListItem>
              <ListItem>Three.js and React Three Fiber for 3D graphics</ListItem>
              <ListItem>Framer Motion for smooth animations</ListItem>
              <ListItem>Styled Components for dynamic styling</ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Get Involved</SectionTitle>
            <Text>
              We're always looking for creative minds to collaborate with. Whether you're
              a developer, designer, or just someone passionate about interactive experiences,
              feel free to reach out through our contact page.
            </Text>
          </Section>
        </Card>
      </Content>
    </Container>
  );
};

export default About; 