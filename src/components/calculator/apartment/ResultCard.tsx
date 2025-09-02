import { styled } from "styled-components";

interface CalculationResult {
  maxLoanAmount: number;
  apartmentPrice: number;
}

interface ResultCardProps {
  result: CalculationResult;
  onReset: () => void;
}

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin: 0 0 20px 0;
  text-align: center;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ResultItem = styled.div`
  padding: 24px;
  background-color: #F8F9FA;
  border-radius: 12px;
  border: 1px solid #E9ECEF;
  text-align: center;
  min-width: 300px;
`;

const ResultLabel = styled.div`
  font-size: 16px;
  color: #4F4F4F;
  margin-bottom: 8px;
`;

const ResultValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #2D9CDB;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border: ${props => props.$primary ? 'none' : '1px solid #E0E0E0'};
  background-color: ${props => props.$primary ? '#000000' : '#FFFFFF'};
  color: ${props => props.$primary ? '#FFFFFF' : '#000000'};
  
  &:hover {
    background-color: ${props => props.$primary ? '#333' : '#F5F5F5'};
  }
`;

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

const ResultCard = ({ result, onReset }: ResultCardProps) => {
  const { maxLoanAmount, apartmentPrice } = result;

  return (
    <Card>
      <Title>💰 계산 결과</Title>
      
      <ResultContainer>
        <ResultItem>
          <ResultLabel>최대 대출 한도</ResultLabel>
          <ResultValue>
            {formatNumber(maxLoanAmount)}원
          </ResultValue>
        </ResultItem>
      </ResultContainer>
      
      <ResultContainer>
        <ResultItem>
          <ResultLabel>아파트 가격 (LTV 70%)</ResultLabel>
          <ResultValue>
            {formatNumber(apartmentPrice)}원
          </ResultValue>
        </ResultItem>
      </ResultContainer>
      
      <ButtonContainer>
        <Button onClick={onReset}>
          다시 계산하기
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default ResultCard;
