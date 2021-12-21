import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import QueueItem from './QueueItem';

const Queue = ({ order }) => {
  const [queueList, setQueueList] = useState([]);
  const tempQueue = queueList;
  const { clicker, selectedMod } = useContext(ProductContext);
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
    setQueueList([...tempQueue, order]);
    
    console.log(queueList);
  }, [clicker]);

  return (
    <div className="queue">
      {queueList.map((e, i) => (
        <QueueItem haveMod={haveMod} e={e} key={i} />
      ))}
    </div>
  );
};

export default Queue;
