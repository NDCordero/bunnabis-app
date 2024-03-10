import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/fakeApi'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProductos(res.filter((prod) => prod.category === categoryId))
        } else {
          setProductos(res)
        }
      })
      .catch((error) => console.log(error, 'todo mal'))
  }, [categoryId])

  return (
    <div>
      {/* {categoryId ? <h1 className='m-3 text-success'>{greeting} <span style={{ color: 'success' }}>{categoryId}</span></h1> :
        <h1 className='m-3 text-success'>{greeting}</h1>} */}

      <h1 className='m-3 text-success'>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
