import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav >
        <Link to = '/services'><div> Services </div></Link>

        <Link to = '/training'><div> Training </div></Link>

        <Link to = '/'> KissMyLashesz </Link>

        <Link to = '/products'><div> Products </div></Link>

        <Link to = '/gallery'><div> Gallery </div></Link>
    </nav>
  )
}
export default Header