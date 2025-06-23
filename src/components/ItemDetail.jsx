import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
const [compra, setCompra]= useState(false)
const {addItem} = useContext(CartContext)
  const onAdd = (cantidad) => {
    setCompra(true)
  addItem(detalle, cantidad)
  }

  return (
    <div className="contenedor-itemdetail">
      <div className="prod-itemdetail">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p className='descripcion'>{detalle.description}</p>
        <p className='precio'>${detalle.price}</p>
        <p>Stock: {detalle.stock} unidades</p>
        {compra 
        ? <div className='btn-prim'> 
          <Link to='/' >Seguir Comprando </Link> 
          <Link to='/cart' > Ir al carrito</Link>
        </div>
        : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
    </div>
  )
}

export default ItemDetail