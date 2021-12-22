import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';

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
  useEffect(() => {
    if (e.quantity < 10) {
      setRunningLow(true);
      console.log(e.name, e.quantity);
    } else if (e.quantity < 1) {
      const removeItem = async () => {
        const res = await axios.delete(`http://localhost:3001/api/products/${e._id}`)
      }
      removeItem()
    }
  }, [sold]);

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
        {e.quantity}
      </p>
    </button>
  );
};

export default Product;
