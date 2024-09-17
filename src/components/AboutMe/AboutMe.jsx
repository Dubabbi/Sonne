// AboutMe.jsx

import React from 'react';
import * as S from './AboutMeStyle';

export default function AboutMe() {
  return (
    <S.AboutMeWrapper>
      <S.Title>About Me</S.Title>
      <S.Section>
        <S.SubTitle>🌱 sprout developer</S.SubTitle>
        <S.Text>
          안녕하세요! 저는 무한한 성장 가능성을 지닌 새싹🌱 개발자 윤소은입니다. 저는 문헌정보학과 컴퓨터공학을 복수 전공하면서 프론트엔드 개발과 디자인에 대한 열정을 키워왔습니다. 대학교 3학년 때, HTML 태그를 사용해 웹사이트를 처음 제작하면서 느꼈던 성취감은 제게 개발자라는 꿈을 심어주었습니다. 이후, 새로운 기술을 배우고 적용하며 성장하기 위해 다양한 프로젝트에 참여하고 있습니다.
        </S.Text>
      </S.Section>

      <S.Section>
        <S.SubTitle>프론트엔드 개발 프로젝트</S.SubTitle>
        <S.Text>
          프론트엔드 개발 프로젝트에서는 리액트와 Figma를 활용해 웹 서비스를 디자인하고 개발했습니다. 특히, API 통신과 토큰 관리를 처음 접하면서 겪었던 어려움을 해결하는 과정에서 문제 해결 능력과 체계적인 접근 방법을 배우게 되었습니다.
        </S.Text>
      </S.Section>

      <S.Section>
        <S.SubTitle>성장 경험</S.SubTitle>
        <S.Text>
          고등학교 졸업 이후 지금까지 쉬지 않고 학업과 아르바이트를 병행했습니다. 학기 중에는 주 5일, 방학에는 주 7일 일하면서 차석을 하기도 했습니다. 현재 하고 있는 아르바이트는 1년 반 동안 꾸준히 이어오고 있으며, 이 경험을 통해 책임감과 성실함을 배웠습니다.
        </S.Text>
      </S.Section>

      <S.Section>
        <S.SubTitle>미래 목표</S.SubTitle>
        <S.Text>
          저는 도전적인 태도로 새로운 기술을 학습하며, 팀워크와 커뮤니케이션을 통해 협업하는 것을 좋아합니다. 앞으로도 지속적으로 학습하고 성장하여, 사용자 경험을 고려한 혁신적인 웹 서비스를 개발하는 프론트엔드 개발자로서 커리어를 쌓아 나가고자 합니다.
        </S.Text>
      </S.Section>

      <S.Footer>
        <S.FooterText>감사합니다!</S.FooterText>
      </S.Footer>
    </S.AboutMeWrapper>
  );
}
