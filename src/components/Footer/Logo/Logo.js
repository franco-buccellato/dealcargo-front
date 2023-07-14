import React from 'react'
import ImagenLogo from '../../../imagenes/isotipo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img
        alt='logo Meca'
        src={ImagenLogo}
        width='70%'
      >
      </img>
    </div>
  )
}

export default Logo