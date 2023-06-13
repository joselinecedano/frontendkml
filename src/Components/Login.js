import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Login = (props) => {
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
    const logOut = () =>{
        signOut(auth).then(()=>{
            //signed out
            navigate('/')
            console.log('user signed out')
        })
        .catch((error)=>{
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, errorMessage)
        })
    }
  return (
    <div className='text-center flex flex-col min-h-screen'>
        <iframe src="https://giphy.com/embed/l3q2Cr0avABaM4eoo" class="giphy-embed" allowFullScreen title='kisses'></iframe>
    <h2 className='font-oldlondon text-4xl'> Welcome</h2>
    <form className='p-2'>
        <label className='text-xl'> Email : </label>
        <input
        id='email'
        type='email'
        name='email'
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Email Address'
        required
        className='mt-2 p-1 text-black'
        />
        <br/>
        <label className='text-xl'> Password : </label>
        <input
        id='password'
        type='password'
        name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        required
        className='mt-2 p-1 text-black'
        />
        <br/>
        <input
        type='submit'
        placeholder='Sign In'
        onClick={onLogin}
        className='p-2 '
        />
    </form>
    <h4>
        Don't have an account? <Link to='/register'> Register </Link>
    </h4>
    <h4>
       Done with your changes? <button onClick={logOut}> Sign Out </button>
    </h4>
</div>
  )
}

export default Login