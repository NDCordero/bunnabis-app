import React from 'react'
import './loader.css'


const Loader = () => {
    return (
        <div className='loader'>
            <img className='imgloader' src="../images/loader.gif" alt="loader" />
            <h4>Cargando...</h4>
        </div>
    )
}

export default Loader
