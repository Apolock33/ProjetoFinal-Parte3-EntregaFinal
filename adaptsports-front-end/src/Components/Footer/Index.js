import React from 'react';
import Logo from '../LogoFooter'
import logofooter from '../../Assets/Logos/logo branco.svg';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import * as ai from 'react-icons/ai';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footerGlobal'>

      <div className="logofooter">
        <Logo logo={logofooter} alt='logofooter' />
      </div>
      <div className='redesociais' align='center'>
        <h3 className='titulofooter'>Redes Sociais</h3>
        <h6>
          <TiSocialFacebook color='white' size='50px' />
          <ai.AiFillInstagram color='white' size='50px' />
          <AiOutlineTwitter color='white' size='50px' />
        </h6>
        <h5 className='titulofooter'>ADAPT SPORTS - Desenvolvido por Squad 12.</h5>
      </div>
      <div className='fale-con'>
        <h3 className='titulofooter'>Fale Conosco</h3>
        <h6>E-mail para contato:<br/>
          Squad12@gmail.com<br /><br />
          Críticas, denúncias e reclamações:<br/>
          Squad12@gmail.com<br /><br />
          Horário de Atendimento:<br />
          Seg à sexta: 11:00 às 16h;<br />
          Sábado: das 14:00 às 19hs;</h6>
      </div>

    </footer>
  );
}