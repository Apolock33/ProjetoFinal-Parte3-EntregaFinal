import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css'

export default function Cadastro() {
 return (
     <div className="CadastroContainer">
         <div className="CadastroFormBody">
             <h1>Crie Sua Conta</h1>
             <form className="Formulario">
                 <div className="inputs">
                     <label className="userLabel">Nome</label>
                     <input type="text" className="userInput" />
                 </div>
                 <div className="inputs">
                     <label className="userLabel">E-mai</label>
                     <input type="email" className="userInput" />
                 </div>
                 <div className="inputs">
                     <label className="sehaLabel">Senha</label>
                     <input type="text" className="senhaInput" />
                 </div>
                 <button className="butonSubmit">Entrar</button><br />
                 <h6 >Já Tem uma Conta?</h6>
                 <Link to='/login'>Clique Aqui!</Link>
             </form>
         </div>
     </div>
 );
}