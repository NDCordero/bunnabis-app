import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
import '../../cssGlobal.css'


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [validateItem, setValidateItem] = useState(false)
  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true)
    const collectionProd = collection(db, 'productos')
    const referenciaDoc = doc(collectionProd, itemId)
    getDoc(referenciaDoc)
      .then((res) => {
        if (res.data()) {
          setProducto({ id: res.id, ...res.data() })
        } else {
          setValidateItem(true)
        }
      })

      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => setLoading(false))

  }, [itemId])


  if (loading) {
    return <Loader />
  }

  if (error) {
    return <div className='ajuste-footer m-3 mt-5 text-danger'>
      <h5>
        ⚠Error al cargar el producto⚠</h5><p>Por favor, intente nuevamente mas tarde.</p>
    </div>
  }

  return (
    <div className='ajuste-footer'>
      {validateItem ? <h5 className='text-success m-3 mt-5'>⚠El producto al que está intentando acceder no existe⚠</h5> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer
