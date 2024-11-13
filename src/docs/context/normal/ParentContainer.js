import React from 'react';
import ChildContainer from './ChildContainer';
import FontContext, { FontSizeProvider } from './FontContext';

// 하위 요소에게 context 제공!
const ParentContainer = () => {
  return (
    
        <FontSizeProvider>
          <ChildContainer />
        </FontSizeProvider>
    
  );
};

export default ParentContainer;