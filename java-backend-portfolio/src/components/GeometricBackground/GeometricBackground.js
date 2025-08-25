import React from 'react';
import styled, { useTheme } from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const Shape = styled.div`
  position: absolute;
  opacity: 0.15;
  transition: all 0.5s ease;
  animation: float 8s ease-in-out infinite;
  
  &:hover {
    opacity: 0.25;
    transform: scale(1.05);
  }
`;

const Circle = styled(Shape)`
  border-radius: 50%;
  background: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation-duration: 12s;
`;

const Triangle = styled(Shape)`
  width: 0;
  height: 0;
  border-left: ${props => props.size / 2}px solid transparent;
  border-right: ${props => props.size / 2}px solid transparent;
  border-bottom: ${props => props.size}px solid ${props => props.color};
  animation-duration: 10s;
`;

const Square = styled(Shape)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  transform: rotate(${props => props.rotation}deg);
  animation-duration: 14s;
`;

const GeometricBackground = () => {
  const theme = useTheme();
  
  // Создаем массив фигур с разными позициями и размерами
  const shapes = [
    { type: 'circle', color: theme.geometricPrimary, size: 120, top: '10%', left: '5%' },
    { type: 'triangle', color: theme.geometricSecondary, size: 100, top: '20%', left: '80%' },
    { type: 'square', color: theme.geometricAccent, size: 80, top: '5%', left: '60%', rotation: 15 },
    { type: 'circle', color: theme.geometricSecondary, size: 60, top: '70%', left: '10%' },
    { type: 'triangle', color: theme.geometricPrimary, size: 90, top: '80%', left: '85%' },
    { type: 'square', color: theme.geometricPrimary, size: 70, top: '40%', left: '15%', rotation: 45 },
    { type: 'circle', color: theme.geometricAccent, size: 100, top: '50%', left: '75%' },
    { type: 'triangle', color: theme.geometricSecondary, size: 80, top: '30%', left: '25%' },
    { type: 'square', color: theme.geometricPrimary, size: 90, top: '65%', left: '50%', rotation: 30 },
    { type: 'circle', color: theme.geometricSecondary, size: 70, top: '15%', left: '40%' }
  ];

  return (
    <BackgroundContainer>
      {shapes.map((shape, index) => {
        const style = {
          top: shape.top,
          left: shape.left,
          animationDelay: `${index * 0.5}s`
        };
        
        switch (shape.type) {
          case 'circle':
            return (
              <Circle
                key={index}
                color={shape.color}
                size={shape.size}
                style={style}
              />
            );
          case 'triangle':
            return (
              <Triangle
                key={index}
                color={shape.color}
                size={shape.size}
                style={style}
              />
            );
          case 'square':
            return (
              <Square
                key={index}
                color={shape.color}
                size={shape.size}
                rotation={shape.rotation}
                style={style}
              />
            );
          default:
            return null;
        }
      })}
    </BackgroundContainer>
  );
};

export default GeometricBackground;