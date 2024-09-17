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
                    <M.CardTitle>Trade Desk</M.CardTitle>
                    <M.CardDescription>
                        Invest in crypto anytime, anywhere with our safe, secure, and easy to use platform.
                    </M.CardDescription>
                    <M.CardButton href="#">Get Started</M.CardButton>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon2} alt="CoinFlip ATMs" />
                    <M.CardTitle>CoinFlip ATMs</M.CardTitle>
                    <M.CardDescription>
                        We have thousands of ATMs located across the U.S. where you can easily convert cash to crypto.
                    </M.CardDescription>
                    <M.CardButton href="#">Find an ATM</M.CardButton>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon3} alt="CoinFlip Wallet" />
                    <M.CardTitle>CoinFlip Wallet</M.CardTitle>
                    <M.CardDescription>
                        Store your investments in our wallet that gives you access to DeFi services in one place.
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
