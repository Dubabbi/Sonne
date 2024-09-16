import React, { useState } from 'react';
import * as L from './NavbarStyle';
import { FaSearch } from 'react-icons/fa';
import Avvvatars from 'avvvatars-react';

export default function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색 창 열림 여부 상태

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('검색어:', searchValue);
    setSearchValue('');
    // 검색 실행 로직 추가 가능
  };

  return (
    <>
    <L.LandingWrapper>
    <L.NavWrapper>
      <L.Logo href="">Sonne</L.Logo>
    </L.NavWrapper>
    </L.LandingWrapper>
    </>
  );
}
