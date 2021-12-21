
import React, {useContext} from 'react'
import Mod from './Mod'
import { ProductContext } from '../ProductContext';

const Mods = () => {
  const {pendingOrder} = useContext(ProductContext);

  return (
    <div className='mods'>
      {pendingOrder.mods.map((e,i ) => (
        <Mod key={i} mod={e} />
          ))}

    </div>
  )
}

export default Mods
