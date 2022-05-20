import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from './styles'

interface exitSideBarProps {
  exitSideBar:(value: boolean) => void
}
export const Nav = ({ exitSideBar }: exitSideBarProps) => {
  const exitNav = () => exitSideBar(false) 
  return (
    <Navigation>
        <ul>
            <li>
              <Link to='/' onClick={exitNav}>Home</Link>
            </li>
            <li>
              <Link to='/produto' onClick={exitNav}>Produtos</Link>
            </li>
            <li>Menu</li>
            <li>Menu</li>
        </ul>
    </Navigation>
  )
}
