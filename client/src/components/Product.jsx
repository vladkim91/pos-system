import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';

const Product = ({ e }) => {
  const { setPendingOrder, setQueue, queue,clicker, setClicker} = useContext(ProductContext);
  const clickHandler = () => {
    setPendingOrder(e)
    setQueue(e._id);
    let click = clicker
    click++
    setClicker(click)
    console.log(click);

  };
  // console.log(currentProduct)

  // useEffect(() => {  setQueue(e)},[])

  return <button onClick={clickHandler}>{e.name}</button>;
};

export default Product;
