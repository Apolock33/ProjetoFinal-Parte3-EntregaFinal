import React from 'react';
import Logo from '../LogoNav'
import logoImg from '../../Assets/Logos/logo azul.svg'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className='navBarApp'>
      <div>
        <Link to='/'><Logo logo={logoImg} /></Link>      </div>
      <div>
        <ul className='list'>
          <li><Link className='a' to='/'>Home</Link></li>
          <li><Link className='a' to='/sobrenos'>Sobre Nós</Link></li>
          <li><Link className='a' to='/locais'>Locais</Link></li>
          <li><Link className='a' to='/esportes'>Esportes</Link></li>
          <li><Link className='Login' to='/'>LogIn</Link></li>
        </ul>
      </div>
    </header>
  );
}