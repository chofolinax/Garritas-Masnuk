import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import "../css/ItemListContainer.css"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import {addDoc, collection, getDocs, query, where} from 'firebase/firestore'
import { db } from "../service/firebase"

const ItemListContainer = ({greeting}) =>{
    const [data, setData]= useState([])
    const {categoryId}= useParams()
    const [loading, setLoading]= useState(false)

        useEffect(()=>{
            setLoading(true)
            const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
            getDocs(productsCollection)
            .then((res)=>{
                const list = res.docs.map((doc)=>{
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                })
                setData(list)
            })
            .catch((error)=> console.log(error))
            .finally(()=> setLoading(false))
        },[categoryId])

    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()
    //     .then((respuesta)=>{
    //         if(categoryId){
    //             setData(respuesta.filter((prod)=> prod.category === categoryId))
    //         }else{
    //             setData(respuesta)
    //         }
    //         })
    //     .catch((error)=> console.error(error))
    //     .finally(()=> setLoading(false))
    // },[categoryId])



    return(
        <>
        {
            loading 
            ? <LoaderComponent/> 
            :   <div>
                    <h1 className="greeting">{greeting}{categoryId && <span className="categoria">{categoryId}</span>}</h1>
                    <ItemList data={data}/>
            </div>
        }
        </>
    )
}
export default ItemListContainer