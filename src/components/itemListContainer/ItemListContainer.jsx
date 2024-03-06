import React from 'react'
import {useState, useEffect} from 'react'
import {getProducts} from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos]=useState([])


  useEffect(()=>{
    getProducts()
    .then((res)=>setProductos(res))
    .catch((error)=> console.log(error, 'todo mal'))
  },[])

  return (
    <div>
        <h1 className='m-3 text-success'>{greeting}</h1>

        <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer
