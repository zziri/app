import { useState, useCallback } from "react";
import { styled } from "styled-components";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ResultCard from "./ResultCard";

// 수정된 인터페이스들
interface CalculationInput {
  loanPeriod: number;          // 대출 기간 (년)
  interestRate: number;        // 대출 금리 (연%)
  maxMonthlyPayment: number;   // 월 상환액 최대 한도
}

interface CalculationResult {
  maxLoanAmount: number;       // 최대 대출 한도
  apartmentPrice: number;      // 아파트 가격 (LTV 70% 기준)
}

type ConversationStep = 
  | 'greeting'
  | 'loan_period_input'
  | 'interest_rate_input'
  | 'monthly_payment_input'
  | 'calculation'
  | 'result'
  | 'complete';

interface ChatMessageType {
  id: number;
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
}

const Container = styled.div`
  background-color: #EAF6FF;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 600px;
  overflow-y: auto;
  padding: 16px 0;
`;

const ChatCalculator = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: 1,
      type: 'system',
      content: '안녕하세요! 최대 대출 한도 계산기입니다. 몇 가지 정보를 입력해주시면 대출 가능한 최대 금액을 계산해드릴게요.',
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'system',
      content: '먼저 대출 기간을 알려주세요. (년 단위, 보통 10~30년)',
      timestamp: new Date()
    }
  ]);

  const [currentStep, setCurrentStep] = useState<ConversationStep>('loan_period_input');
  const [inputData, setInputData] = useState<Partial<CalculationInput>>({});
  const [result, setResult] = useState<CalculationResult | null>(null);

  // 원리금균등상환 방식으로 최대 대출 한도 계산
  const performCalculation = (input: CalculationInput): CalculationResult => {
    const { loanPeriod, interestRate, maxMonthlyPayment } = input;
    
    // 월상환액을 원 단위로 변환 (입력값은 만원 단위)
    const monthlyPaymentInWon = maxMonthlyPayment * 10000;
    
    // 월이율 계산
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanPeriod * 12;
    
    let maxLoanAmount: number;
    
    // 수치 안정성을 위해 매우 낮은 금리일 때는 무이자 근사식 사용
    if (monthlyRate <= 1e-12) {
      maxLoanAmount = monthlyPaymentInWon * totalMonths;
    } else {
      // 원리금균등상환 공식: P = M * (1 - (1+r)^-n) / r
      // P: 최대 대출원금, M: 월상환 한도, r: 월이율, n: 총 개월수
      maxLoanAmount = monthlyPaymentInWon * 
        (1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate;
    }
    
    // 아파트 가격 계산 (LTV 70% 기준)
    const apartmentPrice = Math.floor(maxLoanAmount / 0.7);
    
    return {
      maxLoanAmount: Math.floor(maxLoanAmount),
      apartmentPrice: apartmentPrice
    };
  };

  const addMessage = useCallback((type: 'user' | 'system', content: string) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        type,
        content,
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleUserInput = useCallback((value: string) => {
    const numValue = parseFloat(value.replace(/,/g, ''));
    
    if (isNaN(numValue) || numValue <= 0) {
      addMessage('system', '올바른 숫자를 입력해주세요.');
      return;
    }

    addMessage('user', `${numValue.toLocaleString()}${currentStep === 'interest_rate_input' ? '%' : '만원'}`);

    switch (currentStep) {
      case 'loan_period_input':
        if (numValue < 1 || numValue > 30) {
          addMessage('system', '대출 기간은 1년에서 30년 사이로 입력해주세요.');
          return;
        }
        setInputData(prev => ({ ...prev, loanPeriod: numValue }));
        addMessage('system', '대출 금리를 알려주세요. (연 %, 예: 3.5)');
        setCurrentStep('interest_rate_input');
        break;

      case 'interest_rate_input':
        if (numValue < 0.1 || numValue > 20) {
          addMessage('system', '대출 금리는 0.1%에서 20% 사이로 입력해주세요.');
          return;
        }
        setInputData(prev => ({ ...prev, interestRate: numValue }));
        addMessage('system', '월 상환액 최대 한도를 설정해주세요. (만원 단위)');
        setCurrentStep('monthly_payment_input');
        break;

      case 'monthly_payment_input':
        setInputData(prev => ({ ...prev, maxMonthlyPayment: numValue }));
        
        const completeInput: CalculationInput = {
          ...inputData,
          maxMonthlyPayment: numValue
        } as CalculationInput;
        
        addMessage('system', '계산 중입니다...');
        
        setTimeout(() => {
          const calculationResult = performCalculation(completeInput);
          setResult(calculationResult);
          setCurrentStep('result');
          
          addMessage('system', '계산이 완료되었습니다! 결과를 확인해보세요.');
        }, 1000);
        break;
    }
  }, [currentStep, inputData, addMessage]);

  const resetCalculator = useCallback(() => {
    setMessages([
      {
        id: 1,
        type: 'system',
        content: '새로운 계산을 시작합니다. 대출 기간을 알려주세요. (년 단위, 보통 10~30년)',
        timestamp: new Date()
      }
    ]);
    setCurrentStep('loan_period_input');
    setInputData({});
    setResult(null);
  }, []);

  return (
    <Container>
      <ChatContainer>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </ChatContainer>
      
      {currentStep !== 'result' && currentStep !== 'complete' && (
        <ChatInput
          onSubmit={handleUserInput}
          placeholder={
            currentStep === 'loan_period_input' ? '대출 기간을 입력하세요' :
            currentStep === 'interest_rate_input' ? '대출 금리를 입력하세요' :
            currentStep === 'monthly_payment_input' ? '월 상환액 한도를 입력하세요' :
            '입력하세요'
          }
        />
      )}
      
      {result && (
        <ResultCard result={result} onReset={resetCalculator} />
      )}
    </Container>
  );
};

export default ChatCalculator;
