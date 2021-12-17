import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Products from './Products';

const UserUi = () => {
  const [selectProductById, setSelectProductsById] = useState([])
 
  const clickHandler = (e) => {
    setSelectProductsById(e.target.attributes[0].textContent)
     }

  return (
    <div className="user-ui">
      <h4>Access granted</h4>

      <div className="queue">queue</div>
      <Categories clickHandler={clickHandler}/>
      <Products selectProductById={selectProductById}/>
    </div>
  );
};

export default UserUi;
