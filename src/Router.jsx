import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import NotificationBar from './components/NotificationBar/NotificationBar';
import MainPage from './pages/Main';
import TopButton from './components/TopButton/TopButton';
import AboutMePage from './pages/AboutMe';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
       </Routes>
       <NotificationBar />
      <TopButton />
      <Footer />
    </BrowserRouter>
  );
}
