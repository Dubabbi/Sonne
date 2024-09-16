import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import NotificationBar from './components/NotificationBar/NotificationBar';
import MainPage from './pages/Main';
import TopButton from './components/TopButton/TopButton';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* 일반 사용자 페이지 */}
        <Route path="/" element={<MainPage />} />
       </Routes>
       <NotificationBar />
      <TopButton />
      <Footer />
    </BrowserRouter>
  );
}
