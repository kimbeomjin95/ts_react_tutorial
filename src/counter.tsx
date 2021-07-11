import React, { useReducer } from 'react';

// action type 정의(typescript를 사용할 경우)
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0); // 제네릭<number>를 선언해도 되지만 생략가능, 자동적으로 number 선언

  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
// JS와 차이점이라고 한다면 확장자가 .tsx인 것
