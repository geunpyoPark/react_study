import React from 'react';
import { Link } from 'react-router-dom';

// 직업의 기술을 보여주는 페이지
const Intro = () => {
  return (
    <div>
      여기는 소개 페이지!😎
      <div>
        <Link to={"/job/developer"}>개발자 소개 페이지</Link>
      </div>
      <div>
        <Link to={"/job/planner"}>기획자 소개 페이지</Link>
      </div>
    </div>
  );
};

export default Intro;