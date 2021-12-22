import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import Products from './Products';
import Queue from './Queue';
import { ProductContext } from '../ProductContext';
import Mods from './Mods'
import SideBar from './SideBar';

const UserUi = () => {
  const [sold, setSold] = useState(false);
  // Retrieve  Id to use in Categories
  const [selectProductById, setSelectProductsById] = useState([]);
  // Retrieve Product ID and Object
  const [mods, setMods] = useState([]);
  const [selectedMod, setSelectedMod] = useState('')
  const [queue, setQueue] = useState('');
  const [pendingOrder, setPendingOrder] = useState([]);
  const [clicker, setClicker] = useState(0)
  const [clicked, setClicked] = useState(false);
  const [displaySum, setDisplaySum] = useState(0)
  const userName = 'Vlad'
  const clickHandler = (e) => {
    setSelectProductsById(e.target.attributes[0].textContent);
  };


  return (
    <div className="user-ui-window">
       <h4 className ="message">Welcome back, {userName}!</h4>
       <SideBar />
      <div className="user-ui">
           <ProductContext.Provider value ={{sold, setSold, displaySum, setDisplaySum,selectedMod,setSelectedMod,clicked, setClicked, mods, setMods, pendingOrder,setPendingOrder,clicker, queue, setQueue, setClicker}}>
      <Queue order={pendingOrder} />
      
      <Categories clickHandler={clickHandler} />
      {(clicked) ? <Mods /> : <Products selectProductById={selectProductById} />}

      </ProductContext.Provider>
    </div>
    </div>
    
  );
};

export default UserUi;
