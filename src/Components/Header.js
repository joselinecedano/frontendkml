import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className='nav'>
        <Link className='nav-link' to = '/about'><div> About </div></Link>
        <Link className='nav-link' to = '/services'><div> Services </div></Link>
        <Link className='nav-link' to = '/training'><div> Training </div></Link>

        <Link className='logo' to = '/'> KissMyLashesz </Link>

        <Link className='nav-link' to = '/products'><div> Products </div></Link>
        <Link className='nav-link' to = '/gallery'><div> Gallery </div></Link>
        <Link className='nav-link' to = '/user'><div> Account </div></Link>
    </nav>
  )
}
export default Header