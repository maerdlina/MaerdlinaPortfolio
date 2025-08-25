import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  background: ${props => props.theme.cardBackground};
  border: ${props => props.theme.cardBorder};
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0 ${props => props.theme.accent};
  }
`;

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <FiMoon size={20} color="black" /> // Черный цвет для иконки луны в светлой теме
      ) : (
        <FiSun size={20} color="white" /> // Белый цвет для иконки солнца в темной теме
      )}
    </ToggleButton>
  );
};

export default ThemeToggle;