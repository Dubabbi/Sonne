// TopButton.jsx
import React from 'react';
import Img from '/src/assets/icon/topbtn.svg';
import styled from 'styled-components';

export const Add = styled.img`
  width: 5vw;
  height: 5vw;
  cursor: pointer;
  position: fixed;
  right: 2vw;
  bottom: 3vw;
`;

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Add onClick={scrollToTop} src={Img} alt="Scroll to top" />
    </>
  );
}

export default TopButton;
