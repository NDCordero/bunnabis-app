import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((res) => {
        if (categoryId) {
          setProductos(res.filter((prod) => prod.category === categoryId))
        } else {
          setProductos(res)
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) {

    return <Loader/>
  }

  if (error) {
    return <h4 className='m-3 text-success'>Hubo un problema, por favor intente mas tarde</h4
    >
  }

  return (
    <div>
      <h2 className='m-3 text-success'>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
