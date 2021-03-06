import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../ProductContext';
import axios from 'axios';
import { BASE_URL } from '../globals';

const Sell = ({ queue, setQueue, setDisplaySum }) => {
  const [sent, setSent] = useState(false);
  const [bank, setBank] = useState(0)
  const { displaySum, sold, setSold, clicker, setClicker, selectedMod, pendingOrder } =
    useContext(ProductContext);

  const clickHandler = () => {
    const postOnQueue = async () => {
      const res = await axios.put(`http://localhost:3001/api/banks`, {
        orders: [...queue, 'react']
      });
    };
    postOnQueue();
    const getTotal = async () => {
      const res = await axios.get(`http://localhost:3001/api/banks`);
      const initArray = res.data.bank[0].orders;
      // console.log(initArray);
      const cleanArray = initArray.filter(
        (e) => typeof e !== 'string' && e.toString()
      );
      // console.log(cleanArray);
      const sum = cleanArray.reduce((acc, e) => {
        return acc + e.salePrice;
      }, 0);
      setDisplaySum(sum);
      console.log(displaySum)
      // alert(sum)
      const adjustQuantity = () => {
        const arrayOfIds = cleanArray.map((e) => {
          return { id: e._id, quantity: e.quantity };
        });
        arrayOfIds.forEach(async (e) => {
          // console.log(e.id)
          // console.log(e.quantity)
          const decreasedQuantity = e.quantity - 1;
          const res = await axios.put(`${BASE_URL}/products/${e.id}`, {
            quantity: decreasedQuantity
          });
        });
      };
      adjustQuantity();
      
    };

    getTotal();

    const clearQueue = async () => {
      // console.log(displaySum);
      const res = await axios.put(`http://localhost:3001/api/banks`, {
        orders: []
      });
      setQueue([]);
      
    };
    clearQueue();
   
  };

  return (
    <button className="sell" onClick={clickHandler}>
      Sell
    </button>
  );
};

export default Sell;
