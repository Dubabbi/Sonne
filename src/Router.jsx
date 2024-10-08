import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import NotificationBar from './components/NotificationBar/NotificationBar';
import MainPage from './pages/Main';
import TopButton from './components/TopButton/TopButton';
import AboutMePage from './pages/AboutMe';
import ProjectPage from './pages/Project';
import TechstackPage from './components/Techstack/Techstack';
import ActivityPage from './components/Activity/Activity';
import ResumePage from './pages/Resume';
import StudyPage from './pages/Study';
import CS_studyPage from './components/Study/CS_study/CS_study';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/techstack" element={<TechstackPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/cs-study" element={<CS_studyPage />} />
       </Routes>
      <TopButton />
      <Footer />
    </BrowserRouter>
  );
}
