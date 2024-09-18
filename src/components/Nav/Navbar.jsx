import React, { useState, useEffect } from 'react';
import * as L from './NavbarStyle';
import { FaChevronDown, FaChevronUp, FaHome, FaBriefcase, FaUser, FaBook, FaLaptopCode } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; 
import LogoImg from '/src/assets/icon/logoimg.svg';
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [selectedProject, setSelectedProject] = useState('Dropdown'); 
  const navigate = useNavigate(); 
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelectedProject('메인화면');
        break;
      case '/aboutme':
        setSelectedProject('자기소개');
        break;
      case '/project':
        setSelectedProject('프로젝트');
        break;
      case '/techstack':
        setSelectedProject('기술스택');
        break;
      case '/activity':
        setSelectedProject('대외활동');
        break;
      default:
        setSelectedProject('Dropdown'); // 기본값
    }
  }, [location.pathname]); 


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
                <L.DropdownItem bg="#f8f8f8" onClick={() => selectProject('메인화면', '/')}>
                  <FaHome />메인화면
                </L.DropdownItem>
                <L.DropdownItem bg="#e1f5fe" onClick={() => selectProject('자기소개', '/aboutme')}>
                  <FaUser />자기소개
                </L.DropdownItem>
                <L.DropdownItem bg="#fce4ec" onClick={() => selectProject('프로젝트', '/project')}>
                  <FaBriefcase />프로젝트
                </L.DropdownItem>
                <L.DropdownItem bg="#e3f2fd" onClick={() => selectProject('기술스택', '/techstack')}>
                  <FaLaptopCode />기술스택
                </L.DropdownItem>
                <L.DropdownItem bg="#fffde7" onClick={() => selectProject('대외활동', '/activity')}>
                  <FaBook />대외활동
                </L.DropdownItem>
              </L.DropdownMenu>
            )}
          </L.DropdownWrapper>
        </L.NavWrapper>
      </L.LandingWrapper>
    </>
  );
}
