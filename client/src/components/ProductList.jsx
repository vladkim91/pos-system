import React,{useState} from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'


const ProductList = ({product}) => {
  const [currentId, setCurrentId] = useState('')
  const deleteProduct = async () => {
    const res = await axios.delete(`${BASE_URL}/products/${currentId}`)
  }
  const clickHandler = () => {
    setCurrentId(product._id)
    deleteProduct()

  }

  

  return (
    <div className='product-list'>
      <p>{product.name}</p>
      <div className='quantity-close'>
      <p>{product.quantity}</p>
      <button onClick={clickHandler}> x </button>
      </div>
      
    </div>
  )
}

export default ProductList
