import { useState } from "react";
import { styled } from "styled-components";

interface ChatInputProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

const InputContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border: 1px solid #E0E0E0;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  font-size: 15px;
  outline: none;
  background-color: white;
  
  &:focus {
    border-color: #2D9CDB;
    box-shadow: 0 0 0 2px rgba(45, 156, 219, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  min-width: 60px;
  
  &:hover {
    background-color: #333;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ChatInput = ({ onSubmit, placeholder }: ChatInputProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // 숫자, 소수점, 쉼표만 허용
    const filteredValue = inputValue.replace(/[^0-9.,]/g, '');
    setValue(filteredValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
        />
        <SubmitButton type="submit" disabled={!value.trim()}>
          전송
        </SubmitButton>
      </InputContainer>
    </form>
  );
};

export default ChatInput;
