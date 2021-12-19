import React, {useEffect, useState, useContext} from 'react';
import { ProductContext } from '../ProductContext';

const Queue = ({order}) => {
  const [queueList, setQueueList] = useState([])
  const tempQueue = queueList;
  const { clicker } = useContext(ProductContext);
  
  useEffect(() => {
    console.log(order)
    setQueueList([...tempQueue, order])
    
    console.log(queueList)

  }, [clicker])


  return (<div>
    {queueList.map((e,i) => {
      return <p key={i}>{e.name}</p>
    })}
    
    </div>);
};

export default Queue;
