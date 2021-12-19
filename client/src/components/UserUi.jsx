import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Products from './Products';
import Queue from './Queue';
import { ProductContext } from '../ProductContext';

const UserUi = () => {
  // Retrieve  Id to use in Categories
  const [selectProductById, setSelectProductsById] = useState([]);
  // Retrieve Product ID and Object
  const [queue, setQueue] = useState('');
  const [pendingOrder, setPendingOrder] = useState([]);
  const [clicker, setClicker] = useState(0)

  const clickHandler = (e) => {
    setSelectProductsById(e.target.attributes[0].textContent);
  };


  return (
    <div className="user-ui">
      <h4>Access granted</h4>

      <ProductContext.Provider value ={{ setPendingOrder,clicker, queue, setQueue, setClicker}}>
      <Queue order={pendingOrder} />
      <Categories clickHandler={clickHandler} />
        <Products selectProductById={selectProductById} />
      </ProductContext.Provider>
    </div>
  );
};

export default UserUi;
