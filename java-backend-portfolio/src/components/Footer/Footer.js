import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: ${props => props.theme.cardBackground};
  border-top: ${props => props.theme.cardBorder};
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FiGithub size={24} />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={24} />
        </SocialLink>
        <SocialLink href="mailto:your.email@example.com">
          <FiMail size={24} />
        </SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Java Backend Developer. Все права защищены.</Copyright>
    </FooterContainer>
  );
};

export default Footer;