import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Footer from './components/Footer/Footer';
import { projects } from './data/projects';
import { lightTheme, darkTheme } from './styles/themes';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Press Start 2P', cursive;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    line-height: 1.6;
  }
  
  .pixel-font {
    font-family: 'Press Start 2P', cursive;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.background};
  background-image: ${props => props.theme.backgroundPattern};
  background-size: 300px 300px;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: 12px;
  border: ${props => props.theme.cardBorder};
  box-shadow: ${props => props.theme.shadow};
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: ${props => props.theme.profileBorder};
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 2px, transparent 2px),
      radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 2px, transparent 2px),
      radial-gradient(circle at 50% 20%, rgba(255,255,255,0.1) 2px, transparent 2px);
    background-size: 50px 50px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 0 ${props => props.theme.accent};
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const Description = styled.p`
  color: ${props => props.theme.text};
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const TechBadge = styled.span`
  background: ${props => props.theme.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.7rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 3rem 0 2rem;
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  text-shadow: 2px 2px 0 ${props => props.theme.accent};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return <div/>;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Main>
          <HeroSection>
            <ProfileImageContainer>
              <ProfileImage>
                {/* Замените на ваше фото */}
                <img 
                  src="/images/my_photo.jpg" 
                  alt="Фото разработчика" 
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/200x200/667eea/white?text=Ваше+Фото";
                  }}
                />
              </ProfileImage>
            </ProfileImageContainer>
            <HeroContent>
              <Title>Java Backend Developer</Title>
              <Subtitle>Создаю надежные и масштабируемые серверные решения</Subtitle>
              <Description>
                Специализируюсь на разработке высоконагруженных приложений с использованием 
                Spring Boot, микросервисной архитектуры и современных DevOps практик.
                Имею опыт работы с распределенными системами, real-time коммуникацией
                и сложными алгоритмами синхронизации данных.
              </Description>
              <TechStack>
                <TechBadge>Java</TechBadge>
                <TechBadge>Spring Boot</TechBadge>
                <TechBadge>Microservices</TechBadge>
                <TechBadge>PostgreSQL</TechBadge>
                <TechBadge>Docker</TechBadge>
                <TechBadge>WebSocket</TechBadge>
                <TechBadge>Distributed Systems</TechBadge>
              </TechStack>
            </HeroContent>
          </HeroSection>

          <SectionTitle>Мои проекты</SectionTitle>
          <ProjectsGrid>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsGrid>
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;