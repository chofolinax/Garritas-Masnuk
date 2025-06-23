import React from 'react'
import { Link } from 'react-router-dom'
import "../css/EmptyCart.css"

const EmptyCart = () => {
  return (
    <div className='carrito-vacio'>
        <h2>Tu Carrito esta vacio </h2>
        <h4>Te invitamos a ver nuestros productos </h4>
        <Link to='/'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart