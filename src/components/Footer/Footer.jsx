import React from "react";
import * as L from '../Nav/NavbarStyle';
import Logo from '/src/assets/image/Footer/logo.svg';


export default function Footer() {
    return (
        <L.FooterWrapper>
        <L.Footerline style={{width: '90%'}}>
          <L.FooterTitle>
            <img src={Logo} />
            <p>Sonne</p>
          </L.FooterTitle>
        </L.Footerline>
        <hr style={{margin: '2%', width: '90%', marginLeft: '5%', color: '#C1C7CD'}}/>
        <L.TextWrapper>
          <h1>Sonne</h1>
          <p>휴대폰 번호: 010-5807-7238</p>
          <p>주소</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '4%'}}>
            <p>instagram</p>
            <p>kakao</p>
            <p>blog</p>
          </div>
        </L.TextWrapper>
        <hr style={{margin: '2%', width: '90%', marginLeft: '5%', color: '#C1C7CD'}}/>
        <L.Copyright>Sonne @ 2024. All rights reserved.</L.Copyright>
      </L.FooterWrapper>
    );
}
