import React from 'react'
import '../css/LoaderComponent.css'

const LoaderComponent = () => {
  return (
    <div className='cont-loader'>
        <img className='loader-img'src='/loader.gif' alt='Cargando...'/>
        <p className='text-loader'>Cargando...</p>
    </div>
)
}

export default LoaderComponent