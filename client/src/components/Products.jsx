import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Product from './Product';
import {BASE_URL} from '../globals'


const Products = ({ selectProductById }) => {
  const [filteredList, setFilteredList] = useState([]);
 

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${BASE_URL}/products`);
      const products = res.data.product;

      const filteredProducts = products.filter(
        (e) => e.category_id == selectProductById
      );
      
      setFilteredList(filteredProducts);
    };
    getProducts();
  }, [selectProductById]);

  
  return (
    <div className="products">
      {filteredList.map((e, i) => {
        return <Product e={e} key={i} />;
      })}
    </div>
  );
};

export default Products;
