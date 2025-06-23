import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import LoaderComponent from './LoaderComponent'
import { Link, useParams } from 'react-router-dom'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [loading, setLoading]= useState(false)
    const [invalid, setInvalid]= useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
      setLoading(true)
      const productsCollection= collection(db, "productos")
      const docRef= doc(productsCollection, itemId)
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({...res.data(), id:res.id})
        }else{
          setInvalid(true)
        }
      })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
    },[])


    // useEffect(()=>{
    //   setLoading(true)
    //     getOneProduct(itemId)
    //     .then((response)=> setDetalle(response))
    //     .catch((error)=> console.log(error))
    //     .finally(() => setLoading(false))
    // },[])
    if(invalid){
      return(
        <div>
          <h2>El producto no existe</h2>
          <Link>Volver a Home</Link>
        </div>
      )
    }
  return (
        <>
        {
            loading 
            ? <LoaderComponent/> 
            :   <div>
                  <ItemDetail detalle={detalle} />
            </div> 
        }
        </>
  )
}

export default ItemDetailContainer