import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiCode, FiServer, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi';

const Card = styled.div`
  background: ${props => props.theme.cardBackground};
  border: ${props => props.theme.cardBorder};
  border-radius: 12px;
  padding: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadow};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 0 ${props => props.theme.accent};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.cardBorder};
  margin-bottom: 1.2rem;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.text};
  margin-bottom: 1.2rem;
  font-size: 0.8rem;
  line-height: 1.6;
`;

const FeaturesList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 0;
`;

const FeatureItem = styled.li`
  color: ${props => props.theme.secondary};
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '↳';
    color: ${props => props.theme.accent};
    font-weight: bold;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.primary};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.theme.accent};
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.accentShadow};
  }
`;

// Иконки для разных типов проектов
const projectIcons = {
  sync: <FiCloud />,
  plant: <FiDatabase />,
  running: <FiCpu />,
  file: <FiServer />
};

const ProjectCard = ({ project }) => {
  // Выбираем иконку в зависимости от типа проекта
  const getProjectIcon = () => {
    if (project.title.includes('Obsydian')) return projectIcons.sync;
    if (project.title.includes('Plant')) return projectIcons.plant;
    if (project.title.includes('Running')) return projectIcons.running;
    if (project.title.includes('File')) return projectIcons.file;
    return projectIcons.sync;
  };

  return (
    <Card>
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectTitle>
        {getProjectIcon()}
        {project.title}
      </ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      
      {project.features && (
        <FeaturesList>
          {project.features.map((feature, index) => (
            <FeatureItem key={index}>
              {feature}
            </FeatureItem>
          ))}
        </FeaturesList>
      )}
      
      <TechList>
        {project.technologies.map((tech, index) => (
          <TechTag key={index}>
            {tech}
          </TechTag>
        ))}
      </TechList>
      
      <ButtonGroup>
        <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FiGithub /> Код
        </Button>
        {project.liveUrl && (
          <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Демо
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;