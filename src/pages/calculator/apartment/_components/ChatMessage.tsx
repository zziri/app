import { styled } from "styled-components";

interface ChatMessageProps {
  message: {
    id: number;
    type: 'user' | 'system';
    content: string;
    timestamp: Date;
  };
}

const MessageContainer = styled.div<{ $isUser: boolean }>`
  display: flex;
  justify-content: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  margin-bottom: 12px;
`;

const MessageBubble = styled.div<{ $isUser: boolean }>`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 12px;
  background-color: ${props => props.$isUser ? '#2D9CDB' : '#FFFFFF'};
  color: ${props => props.$isUser ? '#FFFFFF' : '#000000'};
  font-size: 15px;
  line-height: 1.4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  margin-right: 12px;
  
  ${props => !props.$isUser && `
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 12px;
      width: 0;
      height: 0;
      border-right: 12px solid #FFFFFF;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }
  `}
  
  ${props => props.$isUser && `
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 12px;
      width: 0;
      height: 0;
      border-left: 12px solid #2D9CDB;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
    }
  `}
`;

const SystemMessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

const SystemIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #2D9CDB;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  flex-shrink: 0;
  margin-top: 4px;
`;

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { type, content } = message;
  const isUser = type === 'user';

  return (
    <MessageContainer $isUser={isUser}>
      {isUser ? (
        <MessageBubble $isUser={isUser}>
          {content}
        </MessageBubble>
      ) : (
        <SystemMessageWrapper>
          <SystemIcon>💰</SystemIcon>
          <MessageBubble $isUser={isUser}>
            {content}
          </MessageBubble>
        </SystemMessageWrapper>
      )}
    </MessageContainer>
  );
};

export default ChatMessage;
