import React, {useState} from 'react';
import Logo from '../LogoNav'
import logoImg from '../../Assets/Logos/logo azul.svg'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        <Logo
          logo={logoImg}
        />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/sobrenos" className="nav__link">
            Sobre Nós
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/locais" className="nav__link">
            Locais
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/esportes" className="nav__link">
            Esportes
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contatos" className="nav__link">
            Fale Conosco
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
