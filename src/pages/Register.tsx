import React, {useState} from 'react'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';

import { register } from '../api/api'

function Register() {
  // const [counter, setcounter] = useState(0)
  const [signUpDatavalue, setSignUpDatavalue] = useState({})
  const navigate = useNavigate();
    const handleInputChange = (e) =>{
      setSignUpDatavalue({
        ...signUpDatavalue,
        [e.target.name]: e.target.value
      })
      // setfirstnamevalue(e.target.value);
      //   console.log(e.target.name);        
      }

      const handleRegister = async(e) =>{
        e.preventDefault();
        try {
        const registerResponse = await register(signUpDatavalue)
        console.log('REGISTER', registerResponse ); 
        if(registerResponse.data.status === "success"){
           Swal.fire({
            title: 'User Created!',
            text: registerResponse.data.message,
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 1500
          })
          navigate('/login');
        }

        // console.log(registerResponse.response.data.status);
        
        
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
      
      console.log("DATA VALUE", signUpDatavalue);

  return (
    <div>
        <h2>Register Page</h2>
        {/* <h2>Counter: {counter} </h2>
        <button onClick={() => setcounter(counter + 1)}>Increment</button> */}
        <form>
            <input type='text' placeholder='First name' name='firstName' onChange={handleInputChange}/><br/>
            <input type='text' placeholder='Last name' name='lastName' onChange={handleInputChange}/><br/>
            <input type='email' placeholder='Email' name='email' onChange={handleInputChange}/><br/>
            <button style={{marginTop: "12px"}} onClick={handleRegister}>Register</button>
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default Register