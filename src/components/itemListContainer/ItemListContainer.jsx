import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import '../../cssGlobal.css'

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)

    const productsCollection = categoryId ? query(collection(db, "productos"), where('category', '==', categoryId)) : collection(db, "productos")
    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data()
          }
        })
        setProductos(list)
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false))
  }, [categoryId])



  if (loading) {

    return <Loader />
  }

  if (error) {
    return <div className='ajuste-footer m-3 mt-5 text-danger'>
      <h5>
        ⚠Error al cargar los productos⚠</h5><p>Por favor, intente nuevamente mas tarde.</p>
    </div>
  }

  return (
    <div className='ajuste-footer'>
      <h2 className='m-3 mt-4 mb-4 text-success'>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
