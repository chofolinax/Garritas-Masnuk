import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../css/Checkout.css'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, cartTotal, clear} = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra = (e)=>{
        e.preventDefault()

        if(!buyer.name || !buyer.adress || !buyer.email){
            toast('😿 Todos los campos son requeridos!', {
                style:{
                fontFamily: 'Nunito',
                fontWeight: '600',
                fontSize: '18px'},
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce
            })
        }else if(buyer.email !== validateEmail){
            toast('🙀 Los correos no coinciden!', {
                style: {
                fontFamily: 'Nunito',
                fontWeight: '600',
                fontSize: '18px'},
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
                transition: Bounce
            })
        }else{
            let orden = {
            comprador:buyer,
            compras:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
            toast('😻 Compra realizada con exito!', {
                    style: {
                    fontFamily: 'Nunito',
                    fontWeight: '600',
                    fontSize: '18px'},
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    transition: Bounce
            })
        })
        .catch((error)=> console.log(error))
        }
    }

  return (
    <>
    {
        orderId 
        ?<div className='orden-generada'>
            <h2>Orden generada correctamente</h2>
            <h2>El id es:{orderId}</h2>
            <Link to='/'>Volver a home</Link>
        </div>
        : <div className='formulario-orden'>
                <h1>Completa con tus datos</h1>
                <form onSubmit={finalizarCompra}>
                    <input type="text" placeholder= 'Complete con su nombre completo' name='name' onChange={buyerData}/>
                    <input type="text" placeholder='Complete con su direccion de envio' name='adress' onChange={buyerData}/>
                    <input type="email" placeholder='Complete con su email' name='email' onChange={buyerData}/>
                    <input type="email" placeholder='Repita su email' name='email2' onChange={(e)=> setValidateEmail(e.target.value)}/>
                    <button type='submit'>Finalizar compra</button>
                </form>
            </div>
    }
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce} />
    </>
  )
}

export default Checkout