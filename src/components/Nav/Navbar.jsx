import React, { useState } from 'react';
import * as L from './NavbarStyle';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import LogoImg from '/src/assets/icon/logoimg.svg';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [selectedProject, setSelectedProject] = useState('Dropdown'); 
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
          <div onClick={e=>navigate('/')} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', maxWidth: '15%', gap: '4%', marginLeft: '2%'}}>
            <img src={LogoImg} style={{maxWidth: '13%'}}/>
            <L.Logo>Sonne</L.Logo>
          </div>
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
