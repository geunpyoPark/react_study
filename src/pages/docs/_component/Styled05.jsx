import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons';

const Styled05 = () => {
  return (
    // 폰트어썸 아이콘 사용
    <div>
      <FontAwesomeIcon icon={faPoo} spin />
      <FontAwesomeIcon icon={faTree} shake/>
    </div>
  );
};

export default Styled05;