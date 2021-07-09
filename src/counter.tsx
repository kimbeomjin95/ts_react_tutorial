import React, { useState } from 'react';

// Counter props 정의할 경우
// type CounterProps = {
// }
function Counter() {
  const [count, setCount] = useState(0); // 제네릭<number>를 선언해도 되지만 생략가능, 자동적으로 number 선언

  const onIncrease = () => {
    setCount(count + 1); // typescript 사용으로 count가 number형인 것을 알게됨
  }

  const onDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter;
// JS와 차이점이라고 한다면 확장자가 .tsx인 것 