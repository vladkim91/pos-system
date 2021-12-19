import React, {useEffect, useState, useContext} from 'react';
import { ProductContext } from '../ProductContext';

const Queue = ({order}) => {
  const [queueList, setQueueList] = useState([])
  const tempQueue = queueList;
  const { clicker } = useContext(ProductContext);
  
  useEffect(() => {
  
    setQueueList([...tempQueue, order])
    
    console.log(queueList)

  }, [clicker])


  return (<div className='queue'>
    {queueList.map((e,i) => {
      return <p className="queue-product"key={i}>{e.name} {e.mods}</p>
    })}
    
    </div>);
};

export default Queue;
