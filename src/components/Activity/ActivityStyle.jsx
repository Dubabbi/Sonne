import styled, { keyframes } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; 
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: ${(props) => props.count * 100}%;  
  transform: translateX(-${(props) => props.currentIndex * 100}%); 
  transition: transform 0.5s ease-in-out;
`;

export const ItemImage = styled.img`
  flex-shrink: 0;  
  width: 100%;  
  height: 90vh;
  object-fit: cover;
`;
export const CarouselWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 70%;
  margin-left: 15%;
  display: flex;
  justify-content: space-around;
`;

export const ItemTitle = styled.div`
  font-size: 1.1vw;
  font-weight: bold;
  color: #000;
`;

export const ItemContent = styled.div`
  text-align: center;
  display: ${(props) => (props.isVisible ? 'block' : 'none')}; 
  animation: ${(props) => (props.isVisible ? fadeIn : 'none')} 0.4s ease-in-out;
  font-size: 0.8vw;
  color: #222;
`;

export const CarouselItem = styled.div`
  position: absolute; 
  bottom: 0;
  width: 18%;
  transition: transform 0.4s ease-in-out, z-index 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #f0e5de;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 10px;
  padding: 20px;
  z-index: ${(props) => (props.isHovered ? '2' : '1')}; 
  box-shadow: ${(props) => (props.isHovered ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 3px 6px rgba(0, 0, 0, 0.08)')};
  transform: ${(props) => (props.isHovered ? 'translateY(0px) scale(1.05)' : 'translateY(0px) scale(1)')};
  background: ${(props) => (props.isHovered ? '#e0d4cc' : '#f0e5de')};
  
  &:hover{
    transition: all 0.3s ease;
  }

  &:hover ${ItemTitle} {
    margin: 2%;
  }

  &:hover ${ItemContent} {
    margin: 2%;
  }
`;


export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ActivityContainer = styled.div`
  background-color: #fff;
`