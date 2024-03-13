import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams()

    useEffect(()=> {
      setLoading(true)
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    if(loading){
      return <h4 className='m-3 text-success'>Cargando detalle...</h4>
  }  

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
