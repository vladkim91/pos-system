import React, {useEffect, useState} from 'react'

const Product = ({e, setQueue,productClickHandler}) => {
  const [currentProduct, setCurrentProduct] = useState({})
  useEffect(() => {
      setCurrentProduct(e)
      setQueue(currentProduct)
  },[])  
  
  // console.log(currentProduct)

  // useEffect(() => {  setQueue(e)},[])
    
  return (
    <button onClick={productClickHandler}>
      {e.name}
    </button>
  )
}

export default Product
