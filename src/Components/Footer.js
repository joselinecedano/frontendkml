import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer  className='flex justify-center '>
        <Link  to = 'https://www.facebook.com/kissmylasheszz?mibextid=LQQJ4d'> <div> <img className='h-10'src='/images/facebook.png' alt='facebook'/></div></Link> 

        <Link to = 'https://instagram.com/kissmylashesz?igshid=MzRlODBiNWFlZA=='> <div> <img className='h-10 ' src='/images/instagram.png' alt='insta'/> </div></Link>

        <Link to = 'https://www.tiktok.com/@kissmylashesz?_t=8chb7xPO69u&_r=1'> <div> <img className='h-10' src='/images/tiktok.png' alt='tiktok'/> </div></Link>
    </footer>
    <div className='text-center'> 
    <Link  to='/admin'> @kissmylashesz </Link>
    </div>
    </>
   
  )
}

export default Footer