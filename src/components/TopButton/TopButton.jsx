// TopButton.jsx
import React from 'react';
import Img from '/src/assets/icon/topbtn.svg';
import styled from 'styled-components';

export const Add = styled.img`
  width: 4vw;
  height: 4vw;
  cursor: pointer;
  position: fixed;
  right: 2.5vw;
  bottom: 2.5vw;
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
