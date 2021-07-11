import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// TS환경에서 Context 사용할 경우
type FooValue = {
  foo: number;
};

// createContext<generic>(defaultValue);
const FooContext = createContext<FooValue | null>(null);

type Color = 'red' | 'orange' | 'blue';

// state 값이 객체형태이면 type alias OR interface 사용
// state에 대한 type 선언
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// action에 대한 type 선언
type Action =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };

// reducer의 파라미터의 타입도 설정했지만 리턴타입의 타입도 설정
// reducer함수에서는 State타입을 반환해야 함
// (중요)파라미터의 타입, 리턴타입의 타입
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: 'blue',
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

// SampleDispatchContext에서는 Dispatch함수를 value로 가지고 있기 때문에 <generic>으로 dispatch함수에 대한 타입을 넣어줘야 함
type SampleDispatch = Dispatch<Action>;

// state관리 context(context를 만들때 <generic>설정)
const SampleStateContext = createContext<State | null>(null);

// dispatch관리 context
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

type SampleProviderProps = {
  children: React.ReactNode; // children을 받아올 경우
};

export function SampleProvider({ children }: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state, dispatch를 쉽게 사용할 수 있도록 custom hook 생성
export function useSampleState() {
  const state = useContext(SampleStateContext);
  // state값이 유효하지 않을 때 에러처리를 하면 useSampleState의 결과값은 언제나 유효
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
