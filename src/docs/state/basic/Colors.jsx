import React, { useState } from 'react';

const Colors = () => {

// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색을 입력하면 글자 색을 없앤다.

  // 글자 색을 상태로 관리합니다.
  const [result, setResult] = useState('');
  const [color, setColor] = useState('')
  // 버튼 클릭 시 글자 색을 변경하는 함수
  
  const onClickToColorRed = () => { setColor("red") }
  const onClickToColorBlue = () => { setColor("blue") }
  const onInputChange = (e) => { 
    setResult(e.target.value)
    if(e.target.value === "핑크색"){ setColor("") }
    return setResult(e.target.value)
  }
  console.log(color)

  return (
    <div>
      <p style={{color}}>{result}</p>
      <input type="text" onChange={onInputChange}/>
      <button onClick={onClickToColorRed}>빨간색</button>
      <button onClick={onClickToColorBlue}>파란색</button>
    </div>
  );
};

export default Colors;
