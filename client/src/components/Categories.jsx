import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({clickHandler}) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(`http://localhost:3001/api//categories`);
      const categories = res.data.category;
    
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <div className="categories">
             {categories.map((e,i) => {

           return <button category_id={e._id} onClick={clickHandler}key={i}className="category">
           {e.name}
          </button>
        })}
      
    </div>
  );
};

export default Categories;
