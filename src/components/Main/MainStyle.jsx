//MainStyle.jsx

import styled from 'styled-components';
import { keyframes } from 'styled-components';
import backgroundImage from './noise.svg'; 

export const bounceTwice = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25%, 75% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
`;

export const ContactWrapper = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
    align-items: center;
    padding: 4% 11%;
    display: flex;
    width: 100%;
    minHeight: 20vh;
    background-color: #333;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 1024px) {
        max-width: 90%;
        padding: 0 2%;
        margin: 5%;
    }
    p{
        font-size: 1.5rem;
        color: grey;
        text-align: left;
    }
    h1{
        font-size: 3rem;
        color: white;
        text-align: left;
    }
`

export const Contact = styled.div`
    background-color: #000;
    text-align: center;
    align-items: center;
    padding: 1% 3%;
    display: flex;
    &:hover{
        background-color: #555;
    }
    @media (max-width: 1024px) {
        max-width: 90%;
        padding: 0 2%;
        margin: 5%;
    }
`


export const TitleWrap = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #262626;
  letter-spacing: 0px;
  line-height: 1.5;
`;

export const OptionLink = styled.a`
    display: block;
    background-color: #4B518F;
    text-align: center;
    line-height: 1.7;
    padding: 8%;
    margin-bottom: 30%;
    border-radius: 10px;
    text-decoration: none;
    color: #EEFFFF;
    font-size: 2rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #5D639A;
    }
`;

export const ImageWrap = styled.div`
    display: flex;
    justify-content: center;
    img {
        margin: 7% auto 0;
        max-width: 50%;
    }
`

export const Layer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: .6rem;
  padding-bottom: .6rem;
  color: #333;
`;

export const List = styled.ul`
  margin: 0 -.4rem;
  font-size: 0;
`;

export const SynopsisItem = styled.li`
  position: relative;
  width: 33.33%;
  margin-top: 2%;
  margin-bottom: 2%;
  text-align: center;
  border-right: 1px solid #d9d9d9;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;

  &:last-child {
    border-right: 0;
  }

  &:hover {
    &:before {
      left: 0;
      opacity: 1;
      filter: alpha(opacity=100);
      transition: all 1.2s ease;
    }

    .item-img {
      animation: ${bounceTwice}. 6s ease;
    }
  }

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: -20%;
    top: 0;
    transition: all .5s ease;
    opacity: 0;
    filter: alpha(opacity=0);
  }
`;

export const ItemWrap = styled.figure`
  position: relative;
  padding: 2.5rem 1.4rem;
  text-align: center;
  z-index: 2;
  max-width: 500px;
  margin: 0 auto;
`;

export const ItemImg = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding: 0 0 2rem;

  img {
    transition: all .5s ease;
    padding: 1%;

    &:hover {
      animation: ${bounceTwice} 1s ease-in-out; // 애니메이션 적용
    }
  }
`;

export const ItemInfo = styled.figcaption`
  max-width: 500px;
  margin: 0 auto;
`;

export const ItemTitle = styled.h2`
  position: relative;
  font-weight: bold;
  padding: 0.5rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: #333;

  a {
    color: inherit;

    &:hover {
      color: #000;
      font-weight: bold;
    }
  }
`;

export const ItemDesc = styled.div`
  display: block;
  line-height: 1.7;
  font-size: 16px;
  color: #909090;
`;

export const MainWrapper = styled.div`
  font-size: 1.3vw;
  position: relative;
  height: 100vh; // 높이를 뷰포트 높이에 맞추어 전체 화면을 채우도록 설정
  color: #FFFFFF; // 텍스트 색상을 흰색으로 설정
  line-height: 1.7;
  background-image: url(${backgroundImage});
  background-color: #000;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; // 텍스트를 중앙 정렬
`;

export const Heading = styled.h1`
  font-size: 4rem; // 대형 폰트 사이즈
  font-weight: bold;
  margin-bottom: 0.5rem; // 하단 여백 설정
`;

export const SubText = styled.p`
  font-size: 1.5rem; // 중간 폰트 사이즈
  margin-bottom: 2rem; // 하단 버튼과의 여백
`;

export const StartButton = styled.button`
  font-size: 1rem;
  padding: 10px 20px;
  color: #FFFFFF;
  background-color: #6548A3; // 버튼 배경색
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s; // 호버 효과

  &:hover {
    background-color: #8168B1; // 버튼 호버시 색상 변경
  }
`;


// 카드 전체를 감싸는 래퍼
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding: 1vw 0;
  background-color: #010102;
`;

// 개별 카드 요소
export const Card = styled.div`
  background-color: #1f1f2e;
  color: white;
  border-radius: 1vw;
  padding: 1.3vw;
  width: 22%;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

// 카드 내부 아이콘 이미지
export const CardIcon = styled.img`
  width: 50px;
  margin-bottom: 1rem;
`;

// 카드 제목
export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

// 카드 설명 텍스트
export const CardDescription = styled.p`
  font-size: 1rem;
  color: #d0d0d0;
  margin-bottom: 1.5rem;
`;

// 카드의 CTA 버튼
export const CardButton = styled.a`
  font-size: 1rem;
  color: #b09eff;
  text-decoration: none;

  &:hover {
    color: #d0c1ff;
  }
`;