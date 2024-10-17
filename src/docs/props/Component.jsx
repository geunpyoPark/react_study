import React from 'react';


const Component = (props) => {
  console.log(props)
  return (
    <div>
      <p>제 이름은 : {props.name}이고,</p>
      <p>제 나이는 : {props.age}입니다.👄</p>
    </div>
  );
};

export default Component;