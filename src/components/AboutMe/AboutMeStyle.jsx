// AboutMeStyle.js

import styled from 'styled-components';

// 전체 Wrapper
export const AboutMeWrapper = styled.div`
  width: 100%;
  padding: 5% 10%;
  color: #f5f5f5;
`;

// 타이틀
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #6548A3;
  margin-bottom: 2rem;
`;

// 섹션 Wrapper
export const Section = styled.div`
  margin-bottom: 3rem;
`;

// 섹션의 제목
export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #6548A3;
  margin-bottom: 1rem;
`;

// 섹션의 텍스트
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
`;

// Footer 영역
export const Footer = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

// Footer 텍스트
export const FooterText = styled.p`
  font-size: 1.5rem;
  color: #6548A3;
  font-weight: bold;
`;
