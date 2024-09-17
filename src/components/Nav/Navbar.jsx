import React, { useState } from 'react';
import * as L from './NavbarStyle';
import { FaSearch } from 'react-icons/fa';
import Avvvatars from 'avvvatars-react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 검색 창 열림 여부 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 상태
  const [selectedProject, setSelectedProject] = useState('Dropdown'); // 기본 선택된 프로젝트

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 열고 닫기
  };

  const selectProject = (project) => {
    setSelectedProject(project); // 선택된 프로젝트 업데이트
    setIsDropdownOpen(false); // 드롭다운 닫기
  };
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
      <L.DropdownWrapper>
          <L.DropdownButton onClick={toggleDropdown}>
            {selectedProject} {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </L.DropdownButton>
          {isDropdownOpen && (
            <L.DropdownMenu>
              <L.DropdownItem onClick={() => selectProject('메인화면')}>메인화면</L.DropdownItem>
              <L.DropdownItem onClick={() => selectProject('자기소개')}>자기소개</L.DropdownItem>
              <L.DropdownItem onClick={() => selectProject('프로젝트')}>프로젝트</L.DropdownItem>
              <L.DropdownItem onClick={() => selectProject('기술스택')}>기술스택</L.DropdownItem>
              <L.DropdownItem onClick={() => selectProject('기술스택')}>대외활동</L.DropdownItem>
            </L.DropdownMenu>
          )}
        </L.DropdownWrapper>
    </L.NavWrapper>

    </L.LandingWrapper>
    </>
  );
}
