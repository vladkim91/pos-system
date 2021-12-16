import React from 'react'
import Categories from './Categories'

const UserUi = () => {

  return (<div className="user-ui">
    <h4>Access granted</h4>

    <div className='queue'>queue</div>
    <Categories />
    <div className="products">products</div>
  </div>)
}

export default UserUi
