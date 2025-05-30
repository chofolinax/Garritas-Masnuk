import {useState} from 'react'
import "../css/ItemCount.css"
import { DiSnapSvg } from 'react-icons/di'

const ItemCount = ({stock}) => {
    const [count, setCount]= useState(1)
    const restar = () => {
        if(count > 0){
        setCount(count - 1)
        }
    }
    const sumar = () =>{
        if(count < stock){
        setCount (count + 1)
        }
    }
  return (
    <div className='botonera'>
        <div className='botones-interno'>
            <button className="botonResta" onClick={restar}>-</button>
            <span className="btn">{count}</span>
            <button className="botonSuma" onClick={sumar}>+</button>
        </div>
        <button className="agregarCarrito">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount