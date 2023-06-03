import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = () => {
    const navigate = useNavigate()
    
    //state for email and password so admins can log in
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            //Signed in 
            const user = userCredential.user
            navigate('/')
            console.log('logged in user', user)
        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }
  return (
    <div>
    <h2> Welcome <br/>Please Sign In </h2>
    <form className='login'>
        <label> Email: </label>
        <input
        id='email'
        type='email'
        name='email'
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Email Address'
        required
        />
        <br/>
        <label> Password: </label>
        <input
        id='password'
        type='password'
        name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        required
        />
        <br/>
        <input
        type='submit'
        placeholder='Sign In'
        onClick={onLogin}
        />
    </form>
    <h4>
        Don't have an account? <Link to='/register'> Register </Link>
    </h4>
</div>
  )
}

export default Login