import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    return (
        <div className="LoginContainer">
            <div className="LoginFormBody">
                <h1>Acesse Sua Conta</h1>
                <form className="Formulario">
                    <div className="inputs">
                        <label className="userLabel">Usuário / E-mai</label>
                        <input type="email" className="userInput"/>
                    </div>
                    <div className="inputs">
                        <label className="sehaLabel">Senha</label>
                        <input type="password" className="senhaInput" />
                    </div>
                    <button className="butonSubmit">Entrar</button><br/>
                    <h6>Ainda Não Tem uma Conta?</h6>
                    <Link to="/cadastro">Clique Aqui!</Link>
                </form>
            </div>
        </div>
    );
}