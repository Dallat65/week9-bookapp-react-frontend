import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
        <h2>Page Not Found</h2>
        <Link to='/'>
            <button>Home</button>
        </Link>
    </div>
  )
}

export default Error404