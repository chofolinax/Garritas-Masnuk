import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h2>Error. La ruta no existe.</h2>
      <Link to='/'>Volver a home</Link>
      </div>
  )
}

export default Error