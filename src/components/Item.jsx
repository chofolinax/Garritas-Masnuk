import React from 'react'
import "../css/Item.css"
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div className="articulos-venta">
  <img src={prod.img} className="articulos-img" alt={prod.name}/>
  <div className="articulos-body">
    <h5 className="articulos-nombre">{prod.name}</h5>
    <p className="articulos-descripcion">${prod.price},00</p>
    <Link to={'/item/'+prod.id} className="boton-vermas">Ver mas</Link>
  </div>
</div>
  )
}

export default Item