import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';

const Product = ({ e }) => {
 
  
  const {clicked, setClicked, mods, setMods, pendingOrder, setPendingOrder, setQueue, clicker, setClicker } =
    useContext(ProductContext);
  const clickHandler = () => {
    setPendingOrder(e);
    setQueue(e._id);
    let click = clicker;
    click++;
    setClicker(click);
    if (pendingOrder.length !== 0 && pendingOrder.mods.length !== 0) setMods([...pendingOrder.mods]);
    if (!clicked && mods.length !== 0) {
      setClicked(true);
    } else {
      setClicked(false);
    }

  };


  return (
    <button className="product" onClick={clickHandler}>
      {e.name}
    </button>
  );
};

export default Product;
