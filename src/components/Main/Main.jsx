import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './MainStyle';
import cardIcon1 from '/src/assets/image/Main/cardIcon1.svg';
import cardIcon2 from '/src/assets/image/Main/cardIcon2.svg';
import cardIcon3 from '/src/assets/image/Main/cardIcon3.svg';

export default function Main() {
  const navigate=useNavigate('');
    return (
        <div style={{backgroundColor: '#010102'}}>
        <M.MainWrapper>
          <M.Heading>프론트엔드 개발자 윤소은입니다.</M.Heading>
          <M.SubText>방문해 주셔서 감사합니다!</M.SubText>
          <M.StartButton onClick={e=>navigate('/aboutme')}>About Me</M.StartButton>
        </M.MainWrapper>
    <M.CardWrapper>
                <M.Card>
                    <M.CardIcon src={cardIcon1} alt="Trade Desk" />
                    <M.CardTitle>기술 스택</M.CardTitle>
                    <M.CardDescription>
                        다룰 수 있는 기술 스택 및 개발 언어
                    </M.CardDescription>
                    <M.Button>
                    <a href="/techstack">More</a>
                    </M.Button>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon2} alt="CoinFlip ATMs" />
                    <M.CardTitle>프로젝트</M.CardTitle>
                    <M.CardDescription>
                        그동안 진행한 개인 & 팀 프로젝트 목록
                    </M.CardDescription>
                    <M.Button>
                      <a href="/project">More</a>
                    </M.Button>
                </M.Card>

                <M.Card>
                    <M.CardIcon src={cardIcon3} alt="CoinFlip Wallet" />
                    <M.CardTitle>대외활동</M.CardTitle>
                    <M.CardDescription>
                        대학교 재학 중에 진행한 대외활동 목록
                    </M.CardDescription>
                    <M.Button>
                    <a href="/activity">More</a>
                    </M.Button>
                </M.Card>
            </M.CardWrapper>

      <M.ContactWrapper>
        <div><h1>LET'S TALK</h1><p>Feel free to reach out for collaboration or inquiries, I'm always open to new opportunities!</p></div>
        <M.Contact><a href="mailto: thdms3160@naver.com">Contact</a></M.Contact>
      </M.ContactWrapper>
      <div style={{height: '10vh'}}></div>
      </div>
    );
}
