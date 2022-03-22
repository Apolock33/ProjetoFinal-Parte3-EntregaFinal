import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import './Login.css'

export default function Login() {

    const email = useRef()
    const senha = useRef()

    

    function log(event) {
        event.preventDefault()
        api.post('/login/auth', {
            email: email.current.value,
            senha: senha.current.value
        }).then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return (
        <div className="LoginContainer">
            <div className="LoginFormBody">
                <h1>Acesse Sua Conta</h1>
                <form className="Formulario" onSubmit={log}>
                    <div className="inputs">
                        <label className="userLabel">Usuário / E-mai</label>
                        <input required type="email" className="userInput" ref={email} />
                    </div>
                    <div className="inputs">
                        <label className="sehaLabel">Senha</label>
                        <input required type="password" className="senhaInput" ref={senha} />
                    </div>
                    <button className="butonSubmit">Entrar</button><br />
                    <h6>Ainda Não Tem uma Conta?</h6>
                    <Link to="/cadastro">Clique Aqui!</Link>
                </form>
            </div>
        </div>
    );
}