import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/api';

function Login() {
  const [loginDatavalue, setLoginDatavalue] = useState({})
  const navigate = useNavigate();
    const handleInputChange = (e) =>{
      setLoginDatavalue({
        ...loginDatavalue,
        [e.target.name]: e.target.value
      })   
    }
    const handleLogin = async(e) =>{
      e.preventDefault();
      try {
      const loginResponse = await login(loginDatavalue)
      if(loginResponse.data.status === "success"){
         Swal.fire({
          title: 'You are now logged in!',
          text: loginResponse.data.message,
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 1500
        })
        navigate('/welcome');
      }

      // console.log(loginResponse.response.data.status);
      
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.log(error);
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        })
    }
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form>
            <input type='email' placeholder='Email' name='email' onChange={handleInputChange}/><br/>
            <input type='text' placeholder='Password' name='password' onChange={handleInputChange}/><br/>
            <button style={{marginTop: "12px"}} onClick={handleLogin}>Login</button>
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default Login