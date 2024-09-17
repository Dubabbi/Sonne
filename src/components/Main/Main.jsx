import React, { useState } from 'react';
import * as M from './MainStyle';
import image1 from '/src/assets/image/Main/image1.svg';
import image2 from '/src/assets/image/Main/image2.svg';
import image3 from '/src/assets/image/Main/image3.svg';
import image4 from '/src/assets/image/Main/image4.svg';
import image5 from '/src/assets/image/Main/image5.svg';
import image6 from '/src/assets/image/Main/image6.svg';
import cardIcon1 from '/src/assets/image/Main/cardIcon1.svg';
import cardIcon2 from '/src/assets/image/Main/cardIcon2.svg';
import cardIcon3 from '/src/assets/image/Main/cardIcon3.svg';

export default function Main() {
    const images = [image1, image2, image3, image4, image5, image6];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
        <M.MainWrapper>
          <M.Heading>프론트엔드 개발자 윤소은입니다.</M.Heading>
          <M.SubText>방문해 주셔서 감사합니다!</M.SubText>
          <M.StartButton>Get Started</M.StartButton>
        </M.MainWrapper>


    <M.CardWrapper>
                <M.Card>
                    <M.CardIcon src={cardIcon1} alt="Trade Desk" />
                    <M.CardTitle>기술 스택</M.CardTitle>
                    <M.CardDescription>
                        다룰 수 있는 기술 스택 및 개발 언어
                    </M.CardDescription>
                    <M.CardButton href="#">Get Started</M.CardButton>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon2} alt="CoinFlip ATMs" />
                    <M.CardTitle>프로젝트</M.CardTitle>
                    <M.CardDescription>
                        그동안 진행한 개인 & 팀 프로젝트 목록
                    </M.CardDescription>
                    <M.CardButton href="#">Find an ATM</M.CardButton>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon3} alt="CoinFlip Wallet" />
                    <M.CardTitle>대외활동</M.CardTitle>
                    <M.CardDescription>
                        대학교 재학 중에 진행한 대외활동 목록
                    </M.CardDescription>
                    <M.CardButton href="#">Download the App</M.CardButton>
                </M.Card>
            </M.CardWrapper>
    {/*
      <M.ContactWrapper>
        <div><h1>LET'S TALK</h1><p>Welcome to inquire or leave us a message, we will serve you wholeheartedly!</p></div>
        <M.Contact>Contact Us!</M.Contact>
      </M.ContactWrapper>
    */}
        </>

    );
}
