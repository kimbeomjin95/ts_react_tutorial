import React, { useState } from 'react';
// type Params = {
//   name: string;
//   description: string
// }

type MyFormProps = {
  // form 객체를 파라미터로 가져오고 해당 객체 타입은 설정
  onSubmit: (form: { name: string; description: string }) => void;
  // onSubmit: (form: Params) => void; // 위와 동일
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: '', // 자동적으로 form 객체 안의 값이 stringd
    description: '',
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // value: 실제 사용자가 변경하려는 값
    setForm({
      ...form,
      [name]: value, // [name]: name, description
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit시 새로고침 실행 방지
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
