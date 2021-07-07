import React from 'react';

// props에 대한 타입 지정
type GreetingsProps = {
  name: string;
  mark: string; // React.FC에서 defaultProps를 사용하기 위해선 ? 사용(해당 컴포넌트에 생략가능한 props가 있을 경우 ? 사용 )
  optional?: string;
  onClick: (name: string) => void;  // onClick은 함수 타입이며 파라미터는 없으며 리턴값이 없는 것을 의미
  // children: React.ReactNode // children을 받아올 경우
}

// <>: Greetings 컴포넌트에 어떤 props를 넣을지 의미
// React.FC: 장점1 - children이 기본적으로 탑재(선언하지 않고 사용할 수 있음)
//           장점2 - Greetings. 을 통해서 여러 defaultProps 등 을 사용할 수 있음
//           결론 - React.FC에서 Greetings.defaultProps을 작동하기 위해선 파라미터에 기본값을 설정
// const Greetings = React.FC<GreetingsProps> = ({ children }) => null
function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>  
      </div>
    </div>
  );    
}

Greetings.defaultProps = {
  mark: '!'
}

export default Greetings;

// React.FC가 아닌 일반 function이면 defaultProps 정상 작동
// typescript로 리액트 컴포넌트를 작성하면서의 가장 큰 이점은 개발작성이 편해짐(props가 빠진경우 error )