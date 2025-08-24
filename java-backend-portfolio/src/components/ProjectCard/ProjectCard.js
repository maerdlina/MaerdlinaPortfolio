import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiCloud, FiDatabase, FiCpu, FiServer, FiPlay } from 'react-icons/fi';

const Card = styled.div`
  background: ${props => props.theme.cardBackground};
  border: ${props => props.theme.cardBorder};
  border-radius: 12px;
  padding: 1.8rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 0 ${props => props.theme.accent};
  }
`;

const ProjectHeader = styled.div`
  margin-bottom: 1.5rem;
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

const MediaContainer = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.cardBorder};
`;

const YouTubeVideo = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.cardBorder};
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoPlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.cardBorder};
  cursor: pointer;
  
  &:hover::before {
    transform: scale(1.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 2px, transparent 2px),
      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 2px, transparent 2px);
    background-size: 50px 50px;
    transition: transform 0.3s ease;
  }
`;

const PlayButton = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3rem;
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

// Названия и иконки для проектов
const projectTitles = {
  obsydian: { name: "ObsydianSync", icon: <FiCloud /> },
  plant: { name: "PlantCare", icon: <FiDatabase /> },
  running: { name: "RunningApp", icon: <FiCpu /> },
  file: { name: "FileDistributor", icon: <FiServer /> }
};

const ProjectCard = ({ project }) => {
  const projectInfo = projectTitles[project.type] || { name: "Проект", icon: <FiCloud /> };

  const renderMedia = () => {
    if (project.youtubeUrl) {
      return (
        <YouTubeVideo>
          <iframe
            src={project.youtubeUrl}
            title={`YouTube video for ${projectInfo.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </YouTubeVideo>
      );
    } else if (project.videoUrl) {
      return (
        <VideoPlaceholder onClick={() => window.open(project.videoUrl, '_blank')}>
          <PlayButton>
            <FiPlay />
          </PlayButton>
        </VideoPlaceholder>
      );
    } else if (project.image) {
      return <ProjectImage src={project.image} alt={projectInfo.name} />;
    }
    return null;
  };

  return (
    <Card>
      <ProjectHeader>
        <ProjectTitle>
          {projectInfo.icon}
          {projectInfo.name}
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
      </ProjectHeader>

      <MediaContainer>
        {renderMedia()}
      </MediaContainer>
      
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