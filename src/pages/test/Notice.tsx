import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface NoticeProps {
  open: boolean;
  title: string;
  content: string;
  titleColor?: string; // 제목 색상
  contentColor?: string; // 내용 색상
  onClose: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s ease;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh; // 상단에서부터의 위치 조정, vh는 상대 단위이므로 변경하지 않음
  background-color: white;
  padding: 1.25rem; // 20px -> 1.25rem
  border-radius: 0.5rem; // 8px -> 0.5rem
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); // 4px -> 0.25rem, 8px -> 0.5rem
  width: auto;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div<{ color?: string }>`
  font-size: 1.25rem; // 20px -> 1.25rem
  font-weight: bold;
  ${({ color }) => color && css`color: ${color};`}
`;

const Content = styled.div<{ color?: string }>`
  font-size: 1rem; // 16px -> 1rem
  margin-top: 0.625rem; // 10px -> 0.625rem
  ${({ color }) => color && css`color: ${color};`}
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem; // 24px -> 1.5rem
`;

export const Notice: React.FC<NoticeProps> = ({
  open,
  title,
  content,
  titleColor,
  contentColor,
  onClose,
}) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 3000); // 3초 후 자동으로 닫힘
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [open, onClose]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay show={show} onClick={handleOverlayClick}>
      <ModalContent onClick={handleModalContentClick}>
        <Header>
          <Title color={titleColor}>{title}</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>
        <Content color={contentColor}>{content}</Content>
      </ModalContent>
    </ModalOverlay>
  );
};
