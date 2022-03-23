import React from 'react';
import Modal from 'react-modal';
import './Modal.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Modals(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#36a9e1';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div classname="modalContainer">
      <button onClick={openModal}>{props.titulo}</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2 className='titulo' ref={(_subtitle) => (subtitle = _subtitle)}>{props.tituloM}</h2>

        <div className='informacoesContainer'>

          <div className='infoGerais'>
            <h3>Informações Gerais</h3>
            <p>{props.informacoes}</p><br />
          </div>
          <div className='infoGerais'>
            <h3>Endereço</h3>
            <p>{props.endereco}</p><br />
          </div>
          <div className='infoGerais'>
            <h3>Contatos</h3>
            <p>{props.contatos}</p><br />
          </div>
          <div className='infoGerais'>
            <h3>Site da Instituição</h3>
            <p>{props.site}</p><br />
          </div>

        </div>

        <button className="BotaoFecharModal" onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
}

