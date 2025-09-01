import { useState, useCallback } from "react";
import { styled } from "styled-components";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ResultCard from "./ResultCard";

// TRD에서 정의한 인터페이스들
interface CalculationInput {
  annualIncome: number;        // 연간 소득 (세전)
  availableCapital: number;    // 매수에 투입 가능한 금액
  loanPeriod: number;          // 대출 기간 (년)
  interestRate: number;        // 대출 금리 (연%)
  maxMonthlyPayment: number;   // 월 상환액 최대 한도
}

interface CalculationResult {
  maxApartmentPrice: number;   // 최대 매수 가능 아파트 가격
  requiredCapital: number;     // 필요한 자본금
  loanAmount: number;          // 대출 금액
  monthlyPayment: number;      // 월 상환액
  actualDSR: number;           // 실제 DSR
  actualLTV: number;           // 실제 LTV
  warnings: string[];          // 경고 메시지
}

type ConversationStep = 
  | 'greeting'
  | 'income_input'
  | 'capital_input'
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
      content: '안녕하세요! 아파트 매수 가능 가격 계산기입니다. 몇 가지 정보를 입력해주시면 최대 매수 가능한 아파트 가격을 계산해드릴게요.',
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'system',
      content: '먼저 연간 소득을 알려주세요. (세전 금액, 만원 단위로 입력)',
      timestamp: new Date()
    }
  ]);

  const [currentStep, setCurrentStep] = useState<ConversationStep>('income_input');
  const [inputData, setInputData] = useState<Partial<CalculationInput>>({});
  const [result, setResult] = useState<CalculationResult | null>(null);

  // 월 상환액 비율 계산 (원리금균등상환)
  const calculateMonthlyPaymentRatio = (interestRate: number, loanPeriod: number): number => {
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanPeriod * 12;
    
    if (monthlyRate === 0) return 1 / totalMonths;
    
    return (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
           (Math.pow(1 + monthlyRate, totalMonths) - 1);
  };

  // 아파트 가격 계산 로직
  const performCalculation = (input: CalculationInput): CalculationResult => {
    const { annualIncome, availableCapital, loanPeriod, interestRate, maxMonthlyPayment } = input;
    
    const monthlyIncome = annualIncome / 12;
    const monthlyPaymentRatio = calculateMonthlyPaymentRatio(interestRate, loanPeriod);
    
    // 1. 자본금 기반 최대 가격 계산 (LTV 80% 기준)
    const capitalBasedPrice = availableCapital / 0.2;
    
    // 2. 소득 기반 최대 가격 계산 (DSR 40% 기준)
    const dsrBasedMonthlyPayment = monthlyIncome * 0.4;
    const dsrBasedLoanAmount = dsrBasedMonthlyPayment / monthlyPaymentRatio;
    const dsrBasedPrice = dsrBasedLoanAmount + availableCapital;
    
    // 3. 사용자 설정 월 상환액 기준
    const userBasedLoanAmount = maxMonthlyPayment / monthlyPaymentRatio;
    const userBasedPrice = userBasedLoanAmount + availableCapital;
    
    // 최종 최대 가격 결정 (가장 제한적인 조건)
    const maxPrice = Math.min(capitalBasedPrice, dsrBasedPrice, userBasedPrice);
    
    // 결과 계산
    const loanAmount = maxPrice * 0.8;
    const requiredCapital = maxPrice * 0.2;
    const monthlyPayment = loanAmount * monthlyPaymentRatio;
    const actualDSR = (monthlyPayment / monthlyIncome) * 100;
    const actualLTV = (loanAmount / maxPrice) * 100;
    
    // 경고 메시지
    const warnings: string[] = [];
    if (actualDSR > 40) {
      warnings.push('DSR이 40%를 초과합니다. 대출 승인이 어려울 수 있습니다.');
    }
    if (actualLTV > 80) {
      warnings.push('LTV가 80%를 초과합니다. 자본금을 더 준비해야 합니다.');
    }
    if (requiredCapital > availableCapital) {
      warnings.push('보유 자본금이 부족합니다.');
    }
    
    return {
      maxApartmentPrice: Math.floor(maxPrice / 10000) * 10000,
      requiredCapital: Math.floor(requiredCapital / 10000) * 10000,
      loanAmount: Math.floor(loanAmount / 10000) * 10000,
      monthlyPayment: Math.floor(monthlyPayment),
      actualDSR: Math.round(actualDSR * 100) / 100,
      actualLTV: Math.round(actualLTV * 100) / 100,
      warnings
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
      case 'income_input':
        setInputData(prev => ({ ...prev, annualIncome: numValue }));
        addMessage('system', '매수에 투입 가능한 자본금을 알려주세요. (만원 단위)');
        setCurrentStep('capital_input');
        break;

      case 'capital_input':
        setInputData(prev => ({ ...prev, availableCapital: numValue }));
        addMessage('system', '대출 기간을 알려주세요. (년 단위, 보통 10~30년)');
        setCurrentStep('loan_period_input');
        break;

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
        content: '새로운 계산을 시작합니다. 연간 소득을 알려주세요. (세전 금액, 만원 단위)',
        timestamp: new Date()
      }
    ]);
    setCurrentStep('income_input');
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
            currentStep === 'income_input' ? '연간 소득을 입력하세요' :
            currentStep === 'capital_input' ? '자본금을 입력하세요' :
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
