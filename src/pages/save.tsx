import React, {useState} from 'react'
import Swal from 'sweetalert2'
// import { ToastContainer, toast } from 'react-toastify';

import { register } from '../api/api'

function Register() {
  // const [counter, setcounter] = useState(0)
  const [signUpDatavalue, setSignUpDatavalue] = useState({})
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
        const registerResponse = await register(signUpDatavalue)
        console.log('REGISTER', registerResponse ); 
        console.log(registerResponse.response.data.status);
        
        if (registerResponse.response.data.status === 'error') {
          // if (1+1 ===2) {

          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
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
    </div>
  )
}

export default Register