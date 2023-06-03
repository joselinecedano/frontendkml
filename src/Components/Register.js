import React, { useState } from 'react'
import {Link, useNavigate}  from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.js'

const Register = () => {
    const navigate = useNavigate()

    // state for users email and password 
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            //signed in
            const user = userCredential.user
            console.log(user)
            navigate('/admin')
        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode,errorMessage)
        })   
    }
  return (
    <section>
        <div>
            <h2> Register Account </h2>
            <form className='register'>
                <label> Email: </label>
                <input
                type='email'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder='Email Address'
                required
                />
                <br/>
                <label> Password: </label>
                <input
                type='password'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder='Password'
                required
                />
                <br/>
                <input
                type='submit'
                placeholder='Register'
                onClick={onSubmit}
                />
            </form>
        </div>
    </section>
  )
}

export default Register