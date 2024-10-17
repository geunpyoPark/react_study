import React from 'react';
import Foods from './Foods';

const FoodContainer = () => {
  const foods = [
    { id : 1, name : "치킨"},
    { id : 2, name : "족발"},
    { id : 3, name : "닭발"},
    { id : 4, name : "피자"},
    { id : 5, name : "라면"},
  ]

  const style = {
    listStyle : "none"
  }
  
  return (
      <Foods foods={foods} style={style}/>
  );
};

export default FoodContainer;