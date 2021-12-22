import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import QueueItem from './QueueItem';
import axios from 'axios';
import Sell from './Sell';

const Queue = () => {
  
  
  const [queueList, setQueueList] = useState([]);
  const tempQueue = queueList;
  const { sold,setSold, clicker, displaySum, setDisplaySum, setClicker, selectedMod, pendingOrder } =
    useContext(ProductContext);
  const [haveMod, setHaveMod] = useState(false);
  const haveModsCheck = () => {
    if (selectedMod) {
      setHaveMod(true);
    } else {
      setHaveMod(false);
    }
  };
  useEffect(() => {
    haveModsCheck();
  }, [selectedMod]);

  useEffect(() => {
    setQueueList([...tempQueue, pendingOrder]);
    console.log(queueList);
    const postOnQueue = async () => {
      const res = await axios.put(`http://localhost:3001/api/banks`, {
        orders: queueList
      });
    };
    
    postOnQueue();
  }, [clicker]);

  return (
    <div className="queue">
      {queueList.map((e, i) => (
        <QueueItem haveMod={haveMod} e={e} key={i} />
      ))}
     
      <Sell setSold={setSold} setDisplaySum={setDisplaySum}queue={queueList} setQueue={setQueueList} />
      <div>{displaySum}</div>
    </div>
  );
};

export default Queue;
