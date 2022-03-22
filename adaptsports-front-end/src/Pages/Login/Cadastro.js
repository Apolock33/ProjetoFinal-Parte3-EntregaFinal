import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css'
import api from '../../Services/api'

export default function Cadastro() {
    const nome = useRef()
    const email = useRef()
    const senha = useRef()

    function cadastro(event) {
        event.preventDefault()
        api.post('/login', {
            nome: nome.current.value,
            email: email.current.value,
            senha: senha.current.value
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        }).then(() => { 
            alert('Você Está Cadastrado')
        });
    }
    

 return (
     <div className="CadastroContainer">
         <div className="CadastroFormBody">
             <h1>Crie Sua Conta</h1>
             <form className="Formulario" onSubmit={cadastro}>
                 <div className="inputs">
                     <label className="userLabel">Nome</label>
                     <input required type="text" className="userInput" ref={nome}/>
                 </div>
                 <div className="inputs">
                     <label className="userLabel">E-mail</label>
                     <input required type="email" className="userInput" ref={email}/>
                 </div>
                 <div className="inputs">
                     <label className="sehaLabel">Senha</label>
                     <input required type="password" className="senhaInput" ref={senha}/>
                 </div>
                 <button className="butonSubmit">Entrar</button><br />
                 <h6 >Já Tem uma Conta?</h6>
                 <Link to='/login'>Clique Aqui!</Link>
             </form>
         </div>
     </div>
 );
}