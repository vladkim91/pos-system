import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({selectProductById}) => {
  const [filteredList, setFilteredList] = useState([])
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3001/api/ui/products`);
      const products = res.data.product;

      const filteredProducts = products.filter((e) => 
        e.category_id == selectProductById
      );
      setFilteredList(filteredProducts)
      
    };
    getProducts();
    console.log(filteredList)
  }, [selectProductById]);

  return <div className="products">{
    filteredList.map((e,i) => {
      return <button key={i}>{e.name}</button>
    })
  }</div>;
};

export default Products;
