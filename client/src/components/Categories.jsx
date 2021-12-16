import React, { useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`http://localhost:3001/api/ui/categories`);
      const categories = res.data.category
      console.log(categories)
    };
    getCategories();
  }, []);

  return <div className="categories"></div>;
};

export default Categories;
