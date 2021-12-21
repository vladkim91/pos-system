import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';

const Product = ({ e }) => {
   const {clicked, setClicked, setMods, pendingOrder, setPendingOrder, setQueue, clicker, setClicker } =
    useContext(ProductContext);
  const clickHandler = async () => {
   
    setPendingOrder(e);
    setQueue(e._id);
    let click = clicker;
    click++;
    setClicker(click);
  
    if (!clicked && e.mods.length !== 0) {
      setMods(e.mods);
      setClicked(true);
     
    } 
   
  };


  return (
    <button className="product" onClick={clickHandler}>
      {e.name}
    </button>
  );
};

export default Product;
