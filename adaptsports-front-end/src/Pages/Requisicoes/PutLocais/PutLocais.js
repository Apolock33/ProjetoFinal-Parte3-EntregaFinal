import React, { useRef } from 'react';
import api from '../../../Services/api';
import './PutLocais.css'

export default function PutLocais() {

    const id = useRef()
    const nome = useRef()
    const cidade = useRef()
    const estado = useRef()
    const imagem = useRef()

    function update(event) {
        event.preventDefault()
        api.put('/locais/{id}', {
            id: id.current.value,
            nome: nome.current.value,
            imagem: imagem.current.value,
            cidade: cidade.current.value,
            estado: estado.current.value
        }).then(() => {
            window.location.reload()
        }).catch(err => {
            console.error(err)
        }).then(() => {
            alert("As Informações Foram Atualizadas")
        })
    }

 return (
   <div className='atualizarBackground'>
         <div className="atualizarLocalContainer">
             <h1>Atualize os Locais</h1>
             <form className="formulario" onSubmit={update}>
                 <div className="formulario">
                     <label className='idLabel'>Id</label>
                     <input className='idInput' required type='number' ref={id}/>
                 </div>
                 <div className="formulario">
                     <label className='idLabel'>nome</label>
                     <input className='idInput' required type='text' ref={nome} />
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