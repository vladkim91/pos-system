import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Product from './Product';
import { ProductContext } from '../ProductContext';

const Products = ({ selectProductById }) => {
  const [filteredList, setFilteredList] = useState([]);
  const {pendingOrder} = useContext(ProductContext)
  const [mods, setMods] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/ui/products`);
      const products = res.data.product;

      const filteredProducts = products.filter(
        (e) => e.category_id == selectProductById
      );
      
      setFilteredList(filteredProducts);
    };
    getProducts();
  }, [selectProductById]);

  useEffect(() => {
    
  
    if (pendingOrder.length !== 0 && pendingOrder.mods.length !== 0) {
      setMods([...pendingOrder.mods])
    }  else {
      setMods([])
    }

    console.log(mods)
  }, [pendingOrder])
  

  return (
    <div className="products">
      {filteredList.map((e, i) => {
        return <Product e={e} key={i} />;
      })}
    </div>
  );
};

export default Products;
