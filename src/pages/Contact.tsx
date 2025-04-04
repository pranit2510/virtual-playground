import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useForm from '../hooks/useForm';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

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

const ContactInfo = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FormContainer = styled(motion.div)`
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.text}88`};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => `${theme.colors.primary}11`};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body};
  color: ${({ theme }) => theme.colors.text};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => `${theme.colors.text}88`};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => `${theme.colors.text}88`};
  border: none;
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => `${theme.colors.text}88`};
  font-size: ${({ theme }) => theme.typography.small};
`;

const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const Contact: React.FC = () => {
  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationRules: {
      name: [(v: string) => v ? undefined : 'Name is required'],
      email: [
        (v: string) => v ? undefined : 'Email is required',
        (v: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v) ? undefined : 'Invalid email address',
      ],
      message: [(v: string) => v ? undefined : 'Message is required'],
    },
    onSubmit: async (values) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', values);
      // Here you would typically make an API call to send the message
    },
  });

  return (
    <Container>
      <Content>
        <Title>Contact Us</Title>
        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Section>
            <SectionTitle>Get in Touch</SectionTitle>
            <Text>
              We'd love to hear from you! Whether you have questions about our
              experiments, want to collaborate on a project, or just want to say
              hello, feel free to reach out.
            </Text>
          </Section>
          <Section>
            <SectionTitle>Contact Information</SectionTitle>
            <Text>
              Email:{' '}
              <ContactLink href="mailto:contact@virtualplayground.com">
                contact@virtualplayground.com
              </ContactLink>
            </Text>
            <Text>
              GitHub:{' '}
              <ContactLink
                href="https://github.com/pranit2510/virtual-playground"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/pranit2510/virtual-playground
              </ContactLink>
            </Text>
          </Section>
          <Section>
            <SectionTitle>Social Media</SectionTitle>
            <Text>
              Follow us on social media to stay updated with our latest experiments
              and announcements.
            </Text>
            <Text>
              Twitter:{' '}
              <ContactLink
                href="https://twitter.com/virtualplayground"
                target="_blank"
                rel="noopener noreferrer"
              >
                @virtualplayground
              </ContactLink>
            </Text>
          </Section>
        </ContactInfo>
        <FormContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your message"
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Contact; 