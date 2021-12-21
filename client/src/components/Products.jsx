import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Product from './Product';


const Products = ({ selectProductById }) => {
  const [filteredList, setFilteredList] = useState([]);
 

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/products`);
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
