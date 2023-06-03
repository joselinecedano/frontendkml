import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer >
        <Link to = 'https://instagram.com/kissmylashesz?igshid=MzRlODBiNWFlZA=='> <div> Insta </div></Link>
        <Link  to = 'https://www.facebook.com/kissmylasheszz?mibextid=LQQJ4d'> <div> Facebook </div></Link>
        <Link  to = 'https://www.tiktok.com/@kissmylashesz?_t=8chb7xPO69u&_r=1'> <div> Tiktok </div></Link>
    </footer>
    <div > 
    <Link to='/admin'> @KissMyLashesz </Link>
    </div>
    </>
   
  )
}

export default Footer