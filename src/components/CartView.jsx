import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../css/CartView.css'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const CartView = () => {
  const {cart, cartTotal, clear, removeItem} = useContext(CartContext)
  const preConfirm = () => {
    Swal.fire({
      title:'Estas seguro de borrar todo el carrito?',
      showDenyButton:true,
      denyButtonText:'No',
      confirmButtonText:'Si',
      customClass:{
        title:'swal-title',
        confirmButton:'swal-boton',
        denyButton:'swal-boton'
      }
    }).then((result)=>{
      if(result.isConfirmed){
        clear()
    }
    })
      }
  return (
    <div className='cart-view'>
        <h2>Tu carrito</h2>
        <div className='cont-cart'>
          {
            cart.map((compra)=>(
              <div className='cart-item' key={compra.id}>
                <img src={compra.img} alt={compra.name}/>
                <span>{compra.name}</span>
                <span>${compra.price},00</span>
                <span>{compra.quantity}</span>
                <span>Precio final: ${compra.price * compra.quantity}</span>
                <button onClick={()=>removeItem(compra.id)}>X</button>
              </div>
            ))
          }
        </div>
        <span className='cart-total'>Total a pagar: ${cartTotal()},00</span>
        <div className='cart-btn'>
        <button onClick={preConfirm}>Borrar</button>
        <Link to='/checkout'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView