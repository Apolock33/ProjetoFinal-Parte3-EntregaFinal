import React, { useRef } from 'react';
import './Contatos.css'
import api from '../../Services/api'

export default function Contatos() {
  const nome = useRef()
  const email = useRef()
  const descricao = useRef()

  function Contato(){
    api.post('/contat', {
      nome: nome.current.value,
      email: email.current.value,
      descricao: descricao.current.value
    }).then(() => window.location.reload())
      .catch(err => console.log(err));
  }

  return (
    <div>
      <div className="contatosContainer">
        <form onSubmit={Contato}>
          <div className="formularioContainer">
            <h1>Fale Conosco</h1>
            <div className="formulario">
              <div className="label-input">
                <label>Nome</label>
                <input type="text" className="nomeInput" ref={nome}/>
              </div>
              <div className="label-input">
                <label>Email</label>
                <input type="email" className="emailInput" ref={email}/>
              </div>
              <div className="label-input">
                <label>Descrição</label>
                <textarea type="text" className="descricaoInput" ref={descricao} />
              </div>
              <button type="submit" className="botaoEnviar">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}