import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroScene } from '../components/3d/HeroScene';
import { Button } from '../components/Button';

const HomeContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.gradient};
`;

const HeroContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark};
  z-index: 1;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
`;

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.background.light};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const CtaSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.background.gradient};
  text-align: center;
  color: ${({ theme }) => theme.colors.text.dark};
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroScene />
        <HeroContent>
          <Title
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Unify Your AI Experience
          </Title>
          <Subtitle
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Access all your favorite AI models through a single subscription.
            Create powerful workflows and unlock the full potential of AI.
          </Subtitle>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="primary">
              Start Free Trial
            </Button>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureGrid>
            <FeatureCard variants={itemVariants}>
              <h3>Unified Access</h3>
              <p>One subscription, unlimited access to multiple AI models.</p>
            </FeatureCard>
            <FeatureCard variants={itemVariants}>
              <h3>Custom Workflows</h3>
              <p>Create automated workflows connecting different AI models.</p>
            </FeatureCard>
            <FeatureCard variants={itemVariants}>
              <h3>Cost Effective</h3>
              <p>Save money by consolidating your AI subscriptions.</p>
            </FeatureCard>
          </FeatureGrid>
        </motion.div>
      </FeaturesSection>

      <CtaSection>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Transform Your AI Experience?</h2>
          <p>Join thousands of users who have already made the switch.</p>
          <Button size="lg" variant="primary">
            Get Started Now
          </Button>
        </motion.div>
      </CtaSection>
    </HomeContainer>
  );
}; 