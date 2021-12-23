import React, { useEffect, useState, useContext } from 'react';
import { ProductContext } from '../ProductContext';
import QueueItem from './QueueItem';
import axios from 'axios';
import Sell from './Sell';
import { BASE_URL } from '../globals';

const Queue = () => {
  const [queueList, setQueueList] = useState([]);
  const tempQueue = queueList;
  const {
    sold,
    setSold,
    clicker,
    displaySum,
    setDisplaySum,
    setClicker,
    selectedMod,
    pendingOrder
  } = useContext(ProductContext);
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

    const postOnQueue = async () => {
      const res = await axios.put(`${BASE_URL}/banks`, {
        orders: queueList
      });
    };

    postOnQueue();
  }, [clicker]);

  return (
    <div className="queue">
      <div className="queue-items">
        {queueList.map((e, i) => (
          <QueueItem haveMod={haveMod} e={e} key={i} />
        ))}
      </div>
      <div className="sell-clear-buttons">
        {' '}
        <Sell
          setSold={setSold}
          setDisplaySum={setDisplaySum}
          queue={queueList}
          setQueue={setQueueList}
        />
        <button
          className="clear"
          onClick={() => {
            setQueueList([]);
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Queue;
