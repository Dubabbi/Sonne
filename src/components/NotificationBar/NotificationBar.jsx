import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: center;
  padding: 0.5%;
  padding-right: 2%;
  display: flex;
  justify-content: flex-end;
  gap: 40%;
  align-items: center;
  z-index: 1000;
`;

const NotificationText = styled.div`
  font-size: 1vw; /* 기본적으로 화면 너비의 4% */

  @media (max-width: 768px) {
    font-size: 2vw; /* 화면 너비가 768px 이하일 때는 6%로 설정 */
  }

  @media (max-width: 480px) {
    font-size: 2vw; /* 화면 너비가 480px 이하일 때는 8%로 설정 */
  }
`;

const CloseButton = styled(FaTimes)`
  cursor: pointer;
`;

const NotificationBar = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <NotificationWrapper>
      <NotificationText>
       방문해 주셔서 감사합니다!
      </NotificationText>
      <CloseButton size={20} onClick={handleClose} />
    </NotificationWrapper>
  );
};

export default NotificationBar;
