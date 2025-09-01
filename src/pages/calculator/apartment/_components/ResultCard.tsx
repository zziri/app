import { styled } from "styled-components";

interface CalculationResult {
  maxApartmentPrice: number;
  requiredCapital: number;
  loanAmount: number;
  monthlyPayment: number;
  actualDSR: number;
  actualLTV: number;
  warnings: string[];
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

const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ResultItem = styled.div`
  padding: 16px;
  background-color: #F8F9FA;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
`;

const ResultLabel = styled.div`
  font-size: 13px;
  color: #4F4F4F;
  margin-bottom: 4px;
`;

const ResultValue = styled.div<{ $highlight?: boolean }>`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.$highlight ? '#2D9CDB' : '#000000'};
`;

const WarningSection = styled.div`
  margin: 20px 0;
`;

const WarningTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #EB5757;
  margin-bottom: 8px;
`;

const WarningItem = styled.div`
  padding: 8px 12px;
  background-color: #FFF5F5;
  border: 1px solid #FEB2B2;
  border-radius: 6px;
  color: #C53030;
  font-size: 14px;
  margin-bottom: 4px;
  
  &:last-child {
    margin-bottom: 0;
  }
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
  const {
    maxApartmentPrice,
    requiredCapital,
    loanAmount,
    monthlyPayment,
    actualDSR,
    actualLTV,
    warnings
  } = result;

  return (
    <Card>
      <Title>💰 계산 결과</Title>
      
      <ResultGrid>
        <ResultItem>
          <ResultLabel>최대 매수 가능 가격</ResultLabel>
          <ResultValue $highlight>
            {formatNumber(maxApartmentPrice)}만원
          </ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>필요한 자본금</ResultLabel>
          <ResultValue>
            {formatNumber(requiredCapital)}만원
          </ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>대출 금액</ResultLabel>
          <ResultValue>
            {formatNumber(loanAmount)}만원
          </ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>월 상환액</ResultLabel>
          <ResultValue>
            {formatNumber(monthlyPayment)}원
          </ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>실제 DSR</ResultLabel>
          <ResultValue style={{ color: actualDSR > 40 ? '#EB5757' : '#27AE60' }}>
            {actualDSR.toFixed(2)}%
          </ResultValue>
        </ResultItem>
        
        <ResultItem>
          <ResultLabel>실제 LTV</ResultLabel>
          <ResultValue style={{ color: actualLTV > 80 ? '#EB5757' : '#27AE60' }}>
            {actualLTV.toFixed(2)}%
          </ResultValue>
        </ResultItem>
      </ResultGrid>
      
      {warnings.length > 0 && (
        <WarningSection>
          <WarningTitle>⚠️ 주의사항</WarningTitle>
          {warnings.map((warning, index) => (
            <WarningItem key={index}>
              {warning}
            </WarningItem>
          ))}
        </WarningSection>
      )}
      
      <ButtonContainer>
        <Button onClick={onReset}>
          다시 계산하기
        </Button>
      </ButtonContainer>
    </Card>
  );
};

export default ResultCard;
