import React from 'react'

const DigitButton = ({value, clickHandler}) => {


  return (<button value={value} onClick={clickHandler}className='digit'>
  {value}
</button>)
}

export default DigitButton