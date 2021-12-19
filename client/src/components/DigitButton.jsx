import React from 'react'

const DigitButton = ({value, clickHandler, passcodeHandler, clearHandler}) => {
  let handler;
  if (value === 'Enter') {
     handler = passcodeHandler
   } else if (value === 'Clear') {
     handler = clearHandler
  } else {
     handler = clickHandler;
  }
  return  <button value={value} onClick={handler} className="digit">{value}</button>
}

export default DigitButton
