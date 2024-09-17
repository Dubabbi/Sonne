import React, { useState } from 'react';
import * as L from './NavbarStyle';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 상태
  const [selectedProject, setSelectedProject] = useState('Dropdown'); // 기본 선택된 프로젝트
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  const selectProject = (project, path) => {
    setSelectedProject(project); 
    setIsDropdownOpen(false); 
    navigate(path); 
  };

  return (
    <>
      <L.LandingWrapper>
        <L.NavWrapper>
          <L.Logo onClick={e=>navigate('/')}>Sonne</L.Logo>
          <L.DropdownWrapper>
            <L.DropdownButton onClick={toggleDropdown}>
              {selectedProject} {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </L.DropdownButton>
            {isDropdownOpen && (
              <L.DropdownMenu>
                <L.DropdownItem onClick={() => selectProject('메인화면', '/')}>메인화면</L.DropdownItem>
                <L.DropdownItem onClick={() => selectProject('자기소개', '/aboutme')}>자기소개</L.DropdownItem>
                <L.DropdownItem onClick={() => selectProject('프로젝트', '/project')}>프로젝트</L.DropdownItem>
                <L.DropdownItem onClick={() => selectProject('기술스택', '/techstack')}>기술스택</L.DropdownItem>
                <L.DropdownItem onClick={() => selectProject('대외활동', '/activity')}>대외활동</L.DropdownItem>
              </L.DropdownMenu>
            )}
          </L.DropdownWrapper>
        </L.NavWrapper>
      </L.LandingWrapper>
    </>
  );
}
