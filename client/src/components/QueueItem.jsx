import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../ProductContext';

const QueueItem = ({ e, haveMod }) => {
  const { selectedMod } = useContext(ProductContext);
    

  return <div className="queue-item">
    {e.name} {e.salePrice}

  </div>;
};

export default QueueItem;
