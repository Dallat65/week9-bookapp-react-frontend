import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>Home Page</h2>
        <Link to= '/register'>
            <button style={{marginRight: "12px"}}>Register</button>
        </Link>
        <Link to= '/login'>
            <button>Login</button>
        </Link>
    </div>
  )
}

export default Home