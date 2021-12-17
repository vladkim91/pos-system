import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Products from './Products';
import Queue from './Queue';

const UserUi = () => {
  const [queue, setQueue] = useState([])
  const [selectProductById, setSelectProductsById] = useState([])


  const clickHandler = (e) => {
    setSelectProductsById(e.target.attributes[0].textContent)
    
  }

  const productClickHandler = () => {
    console.log(queue)
  }



  return (
    <div className="user-ui">
      <h4>Access granted</h4>

      <Queue queue={queue}/>
      <Categories clickHandler={clickHandler}/>
      <Products productClickHandler={productClickHandler}setQueue={setQueue} selectProductById={selectProductById}/>
    </div>
  );
};

export default UserUi;
