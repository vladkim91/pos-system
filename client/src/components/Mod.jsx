import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext';

const Mod = ({ mod }) => {
  const {setSelectedMod, setClicked } = useContext(ProductContext);
  
  return (
    <button
   
      onClick={() => {
        setSelectedMod(mod);
        setClicked(false);

      }}
      className="mod"
    >
      {mod}
    </button>
  );
};

export default Mod;
