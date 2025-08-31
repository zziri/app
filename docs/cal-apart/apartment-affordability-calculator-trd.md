# 아파트 매수 가능 가격 계산기 TRD (Technical Requirements Document)

## 1. 기술 개요

### 1.1 프로젝트명
아파트 매수 가능 가격 계산기 (Apartment Affordability Calculator)

### 1.2 기술 스택
- **프론트엔드**: Next.js, TypeScript, React
- **스타일링**: styled-components
- **상태 관리**: React Hooks
- **챗봇 엔진**: 커스텀 대화 관리 시스템
- **배포**: Vercel

### 1.3 아키텍처
- 클라이언트 사이드 렌더링 (CSR)
- 정적 사이트 생성 (SSG)
- 서버리스 아키텍처

---

## 2. 상세 기술 요구사항

### 2.1 계산 엔진

#### 2.1.1 핵심 계산 함수
```typescript
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
```

#### 2.1.2 계산 로직 구현
```typescript
// 1. 자본금 기반 최대 가격 계산
const capitalBasedPrice = availableCapital / (1 - 0.8); // LTV 80% 기준

// 2. 소득 기반 최대 가격 계산
const monthlyIncome = annualIncome / 12;
const monthlyPaymentRatio = calculateMonthlyPaymentRatio(interestRate, loanPeriod);
const incomeBasedPrice = (monthlyIncome * 0.4) / monthlyPaymentRatio; // DSR 40% 기준

// 3. DSR 제한 기반 최대 가격 계산
const dsrBasedPrice = (monthlyIncome * 0.4) / monthlyPaymentRatio;

// 4. LTV 제한 기반 최대 가격 계산
const ltvBasedPrice = availableCapital / 0.2; // LTV 80% = 자본금 20%

// 5. 최종 최대 가격 결정
const maxPrice = Math.min(capitalBasedPrice, incomeBasedPrice, dsrBasedPrice, ltvBasedPrice);
```

### 2.2 입력 검증 시스템

#### 2.2.1 실시간 검증
```typescript
interface ValidationRules {
  annualIncome: {
    min: 0;
    max: 1000000000; // 10억원
    required: true;
  };
  availableCapital: {
    min: 0;
    max: 1000000000; // 10억원
    required: true;
  };
  loanPeriod: {
    min: 1;
    max: 30;
    required: true;
  };
  interestRate: {
    min: 0.1;
    max: 20;
    required: true;
  };
  maxMonthlyPayment: {
    min: 0;
    max: 10000000; // 1천만원
    required: true;
  };
}
```

#### 2.2.2 제한값 검증
```typescript
const validateLimits = (result: CalculationResult): string[] => {
  const warnings: string[] = [];
  
  if (result.actualDSR > 40) {
    warnings.push('DSR이 40%를 초과합니다. 대출 승인이 어려울 수 있습니다.');
  }
  
  if (result.actualLTV > 80) {
    warnings.push('LTV가 80%를 초과합니다. 자본금을 더 준비해야 합니다.');
  }
  
  return warnings;
};
```

---

## 4. 데이터 관리

### 4.1 상태 관리
```typescript
// 챗봇 계산기 상태 관리
interface ChatCalculatorState {
  messages: ChatMessage[];
  currentStep: ConversationStep;
  inputData: Partial<CalculationInput>;
  result: CalculationResult | null;
  loading: boolean;
  errors: Record<string, string>;
}

// 대화 단계 정의
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

// 채팅 메시지 인터페이스
interface ChatMessage {
  id: number;
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
  data?: any;
}

// 커스텀 훅
const useChatCalculator = () => {
  const [state, setState] = useState<ChatCalculatorState>({
    messages: [],
    currentStep: 'greeting',
    inputData: {},
    result: null,
    loading: false,
    errors: {}
  });
  
  const addMessage = useCallback((message: ChatMessage) => {
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }, []);
  
  const updateInputData = useCallback((field: keyof CalculationInput, value: number) => {
    setState(prev => ({
      ...prev,
      inputData: { ...prev.inputData, [field]: value }
    }));
  }, []);
  
  const moveToStep = useCallback((step: ConversationStep) => {
    setState(prev => ({ ...prev, currentStep: step }));
  }, []);
  
  const calculate = useCallback(async (input: CalculationInput) => {
    setState(prev => ({ ...prev, loading: true }));
    
    try {
      const result = await performCalculation(input);
      setState(prev => ({ 
        ...prev, 
        result, 
        loading: false,
        errors: {}
      }));
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        loading: false,
        errors: { calculation: '계산 중 오류가 발생했습니다.' }
      }));
    }
  }, []);
  
  return { 
    state, 
    addMessage, 
    updateInputData, 
    moveToStep, 
    calculate 
  };
};
```
