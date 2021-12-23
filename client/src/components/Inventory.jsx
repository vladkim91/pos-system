import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';
import Option from './Option'

const Inventory = ({currentCategory}) => {

  const [input, setInput] = useState({
    name: '',
    mods: [],
    quantity: 0,
    salePrice: 0,
    category_id: ''
  });
  const [splitString, setSplitString] = useState('')

  const changeNameHandler = (e) => {
    setInput({ ...input, name: e.target.value });
  };
  const changeModsHandler = (e) => {
    setInput({ ...input, mods: e.target.value.split(',')})
       
    };
  const changeQuantityHandler = (e) => {
    setInput({ ...input, quantity: e.target.value });
  };
  const changeSalePriceHandler = (e) => {
    setInput({ ...input, salePrice: e.target.value });
  };

  const changeCategodyIdHandler = (e) => {
    setInput({ ...input, category_id: e.target.value })
      }
  const clickHandler = (e) => {
    e.preventDefault()

    
    if (input.name && input.quantity && input.salePrice && input.category_id) {
      console.log(input);
      const addProduct = async() => {
        const res = await axios.post(`${BASE_URL}/products`,input)
      }
      addProduct()
    } 
   
  };

  return (
    <div className="form">
      <h1>Add product</h1>
      <form>
        <input
          type="text"
          value={input.name}
          placeholder="Product name"
          id="name"
          onChange={changeNameHandler}
        />
        <label htmlFor="product-name">Product name</label>
        <input
          type="mods"
          value={input.mods}
          placeholder="Modifications"
          id="mods"
          onChange={changeModsHandler}
        />
        <label htmlFor="mods">Modifications</label>
        <input
          type="quantity"
          value={input.quantity}
          placeholder="Quantity"
          id="quantity"
          onChange={changeQuantityHandler}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="quantity"
          value={input.salePrice}
          placeholder="Sale Price"
          id="sale-price"
          onChange={changeSalePriceHandler}
        />
         <select onChange={changeCategodyIdHandler}categories="categories" id="categories"> 
         <option value="">Select Category</option>
           {currentCategory.map((e, i) => ( 
             <Option key={i} option={e.name} optionId={e.id} />
             
           ))}
           </select>
        <label htmlFor="quantity">Sale Price</label>
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
};

export default Inventory;
