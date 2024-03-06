import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemDetail from '../itemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(()=> {
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === '1')))
        .catch((error)=> console.log(error))
    },[])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer
