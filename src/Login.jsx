
import Input from "./Input"
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import {Link} from 'react-router-dom'
import './Log.css';
import { signinAuthUserWithEmailAndPassword} from './firebase'

function Login() {

  const navigate = useNavigate();

  
  const [contact, setcontact] =useState({
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)


  async function handleClick(event) {
    try {
      if (!email || !password) {
        alert('ENTER THE CREDENTIALS OR SIGN UP!!!!!');
        return;
      }

      const response = await signinAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      if (!response) {
        alert('INVALID EMAIL OR PASSWORD!!!! TRY AGAIN');
        return;
      }

      navigate('/');
    } catch (error) {
      alert('LOGIN ERROR ' + error.message);
    }
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="header">
      
       <Link to= '/signup' className="SignLink">
        Sign up 
      </Link>

     <div className="header1"><h2>Your Email</h2></div>
      <Input
        name = 'email'
        type='email'
        onChange ={handlepass}

      />
      <br></br>
      <div className="header1"><h2>Your Password</h2></div>
      <Input
        name= 'password'
        type='password'
        onChange ={handlepass}
        />
      <br></br>
   
      <button className="button1" onClick={handleClick}>
        Login 
      </button>
        
      
  

<br>

</br>
     

    </div>
)}
export default Login