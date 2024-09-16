import React, { useState } from 'react';
import * as M from './MainStyle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '/src/assets/image/Main/image1.svg';
import image2 from '/src/assets/image/Main/image2.svg';
import image3 from '/src/assets/image/Main/image3.svg';
import image4 from '/src/assets/image/Main/image4.svg';
import image5 from '/src/assets/image/Main/image5.svg';
import image6 from '/src/assets/image/Main/image6.svg';
import arrowleft from '/src/assets/image/Main/arrowleft.svg';
import arrowright from '/src/assets/image/Main/arrowright.svg';

export default function Main() {
    const images = [image1, image2, image3, image4, image5, image6];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
        <M.MainWrapper>
          <M.Heading>We make crypto clear and simple</M.Heading>
          <M.SubText>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to every trader at every level.</M.SubText>
          <M.StartButton>Get Started</M.StartButton>
        </M.MainWrapper>
        <M.Layer className="company-synopses">
      <M.List>
      <M.SynopsisItem className="synopsis-item wow fadeInUpA animated" data-wow-delay="0s">
          <M.ItemWrap>
            <M.ItemImg href="">
              <img src="https://cdn.globalso.com/inbertec/th-2.png" alt="Free Sample"/>
            </M.ItemImg>
            <M.ItemInfo>
              <M.ItemTitle>
                <a href="">Free Sample</a>
              </M.ItemTitle>
              <M.ItemDesc>Want to have a try?<br/>Apply for free sample!</M.ItemDesc>
            </M.ItemInfo>
          </M.ItemWrap>
        </M.SynopsisItem>
        <M.SynopsisItem className="synopsis-item wow fadeInUpA animated" data-wow-delay="0s">
          <M.ItemWrap>
            <M.ItemImg href="">
              <img src="https://cdn.globalso.com/inbertec/th-2.png" alt="Free Sample"/>
            </M.ItemImg>
            <M.ItemInfo>
              <M.ItemTitle>
                <a href="">Free Sample</a>
              </M.ItemTitle>
              <M.ItemDesc>Want to have a try?<br/>Apply for free sample!</M.ItemDesc>
            </M.ItemInfo>
          </M.ItemWrap>
        </M.SynopsisItem>
        <M.SynopsisItem className="synopsis-item wow fadeInUpA animated" data-wow-delay="0s">
          <M.ItemWrap>
            <M.ItemImg href="">
              <img src="https://cdn.globalso.com/inbertec/th-2.png" alt="Free Sample"/>
            </M.ItemImg>
            <M.ItemInfo>
              <M.ItemTitle>
                <a href="">Free Sample</a>
              </M.ItemTitle>
              <M.ItemDesc>Want to have a try?<br/>Apply for free sample!</M.ItemDesc>
            </M.ItemInfo>
          </M.ItemWrap>
        </M.SynopsisItem>
      </M.List>
    </M.Layer>
    {/*
      <M.ContactWrapper>
        <div><h1>LET'S TALK</h1><p>Welcome to inquire or leave us a message, we will serve you wholeheartedly!</p></div>
        <M.Contact>Contact Us!</M.Contact>
      </M.ContactWrapper>
    */}
        </>

    );
}
