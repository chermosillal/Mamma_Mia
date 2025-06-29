import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
     <main className="marco">
      <div>
      <h1>Uppps !!! Pagina no existe</h1>
      <div className='boton'>
        <Link to="/">Regresar al Home</Link>
      </div>
      </div>
    </main>
  )
}

export default NotFound