import React from 'react'
import ItemCount from './ItemCount'
import "../css/ItemDetail.css"

const ItemDetail = ({detalle}) => {
  return (
    <div className="contenedor-itemdetail">
      <div className="prod-itemdetail">
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p className='descripcion'>{detalle.description}</p>
        <p className='precio'>${detalle.price}</p>
        <p>Stock: {detalle.stock} unidades</p>
        <ItemCount stock={detalle.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail