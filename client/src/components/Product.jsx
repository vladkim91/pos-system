import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import {BASE_URL} from '../globals'

const Product = ({ e }) => {
  const {
    sold,
    clicked,
    setClicked,
    setMods,
    pendingOrder,
    setPendingOrder,
    setQueue,
    clicker,
    setClicker
  } = useContext(ProductContext);

  const [runningLow, setRunningLow] = useState(false);
 
  


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
      <p>
        {e.name}
      
      </p>
    </button>
  );
};

export default Product;
