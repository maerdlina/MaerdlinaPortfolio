import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.cardBackground};
  border-bottom: ${props => props.theme.cardBorder};
  box-shadow: ${props => props.theme.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Logo>Maerdlina</Logo>
      <Nav>
        {/* <NavLink href="#projects">Проекты</NavLink>
        <NavLink href="#about">Обо мне</NavLink>
        <NavLink href="#contact">Контакты</NavLink> */}
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;