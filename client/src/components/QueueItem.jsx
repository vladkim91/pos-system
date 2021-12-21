import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../ProductContext';

const QueueItem = ({ e }) => {

    

  return <div className="queue-item">
    <div className='item-name'>{e.name}</div> 
    <div className='item-price'>{e.salePrice}</div>

  </div>;
};

export default QueueItem;
