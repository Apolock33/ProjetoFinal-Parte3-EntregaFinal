import React, { useRef } from 'react';
import api from '../../../Services/api';
import './PostLocais.css'


export default function PostLocais() {

  const nome = useRef()
  const cidade = useRef()
  const estado = useRef()
  const imagem = useRef()

  function create(event) {
    event.preventDefault()
    api.post('/login', {
      nome: nome.current.value,
      cidade: cidade.current.value,
      estado: estado.current.value,
      imagem: imagem.current.value
    }).then(() => {
      window.location.reload()
    }).catch(err =>
      console.error(err)
    ).then(() => {
      alert("Um Lovo Local Foi Adicionado!")
    });
  }

  
  return (
    <div className='adicionarBackground'>
      <div className="adicionarLocalContainer">
        <h1>Adicione Novos Locais</h1>
        <form className="formulario" onSubmit={create}>
          <div className="formulario">
            <label className='idLabel'>nome</label>
            <input className='idInput' required type='text' ref={nome}/>
          </div>
          <div className="formulario">
            <label className='idLabel'>Cidade</label>
            <input className='idInput' required type='text' ref={cidade} />
          </div>
          <div className="formulario">
            <label className='idLabel'>Estado</label>
            <input className='idInput' required type='text' ref={estado} />
          </div>
          <div className="formulario">
            <label className='idLabel'>imagem</label>
            <input className='idInput' required type='text' ref={imagem} />
          </div>
          <div className="formulario">
            <button type='submit' >Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}