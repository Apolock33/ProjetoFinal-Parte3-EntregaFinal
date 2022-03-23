import React, { useEffect, useState } from 'react';
import Card from '../../Components/CardLocais/Card'
import './Locais.css'
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import Modals from '../../Components/ModalLocais/Modal';



export default function Locais() {

  const [locais, setLocais] = useState([])
  useEffect(() => {
    api.get("/locais").then((res) => {
      setLocais(res.data)
    }).catch((erro) =>
      console.log(erro))
  }, [])
  console.log(locais)

  return (
    <section>
      <div className='divisor'>
        <br /><br /><h3>Locais</h3><br />
        <p>Aqui você pode checar todos os locais para pratica adaptada de atividade física, basta clicar nos cards para ver suas informações mais detalhadas. Você também pode adicionar locais que não estejam apresentados em nosso site ou atualizar as informações dos que já estão. Ah! E não esqueça de avaliar!</p>
        <br />
      </div>
      <div className='ModalContainer'>
        <div className='cards'>
          {locais.map((local) => (
            <div className='cardContainer' key={local.id}>
              <br />
              <Card
                id={local.id}
                imagem={local.imagem}
                nome={local.nome}
                cidade={local.cidade}
                estado={local.estado}
              /><br />

            </div>
          ))}
          <div className='modaisContainerLocais' align='center'>
            <Modals
              titulo='ADD - Associacao Desportiva Para Deficientes'
              tituloM='ADD - Associacao Desportiva Para Deficientes'
              informacoes='A Associação Desportiva para Deficientes é uma instituição sem fins lucrativos fundada em 1996, pelo professor de educação física Steven Dubner e pela administradora Eliane Miada. Em 2001, a ADD recebeu do Ministério da Justiça o título de Organização da Sociedade Civil de Interesse Público (OSCIP).'
              endereco='ENDEREÇO
Rua das Pitombeiras, 296
Vl. Parque Jabaquara, São Paulo - SP - CEP 04321 160

Horário de funcionamento da Sede Adm.
Seg à sexta: 8:30 às 12h e das 13 ás 17:30
Sábado: das 08:00 às 12 hs'
              contatos='11 5011 6133
            contato@add.org.br'
              site='https://www.add.org.br/contato.asp'
            /><br />
            <Modals
              titulo='CESEC | CENTRO DE EMANCIPACAO SOCIAL E ESPORTIVA DE CEGOS'
              tituloM='CESEC | CENTRO DE EMANCIPACAO SOCIAL E ESPORTIVA DE CEGOS'
              informacoes='A principal estratégia da Instituição para alcançar sua missão, é a demonstração para a sociedade em geral, todo potencial que estes possuem para o exercício das diferentes atividades da vida, como é o caso do esporte, cultura, trabalho, educação, e demais atividades sociais.
              O CESEC tem por finalidade oferecer a prática esportiva à pessoas cegas e ou com deficiência visual parcial, independente de sua Idade, cor, credo ou classe social.'
              endereco='Rua Padre Adelino, nº 2074, Conjunto 121
Quarta Parada - São Paulo/SP - CEP: 03303-000'
              contatos=' (11) 98216-5883 / 
              cesec@cesec.org.br'
              site='https://www.cesec.org.br/inicio'
            /><br/>
            <Modals
              titulo='JR-SP | ASSOCIAÇÃO PARADESPORTIVA JR SP'
              tituloM='JR-SP | ASSOCIAÇÃO PARADESPORTIVA JR SP'
              informacoes='A instituição surgiu da necessidade do Deficiente Intelectual (DI) de praticar esporte. Após alguns anos, o projeto cresceu tornando-se a Associação Paradesportiva JR São Paulo, que hoje conta com aproximadamente 90 alunos e é voltada ao desenvolvimento de atletas com DI.
              A Associação promove treinos e organiza campeonatos de quatro modalidades: Ginástica Artística, Ginástica Ritmica, Natação e Futsal.'
              endereco='Centro Olímpico de Treinamento e Pesquisa Marechal Mário Ary Pires
                        Av. Ibirapuera, 1315 - Vila Clementino, São Paulo - SP, 04029-000

                        Clube Escola do Ibirapuera,
                        Rua Pedro de Toledo, 1651 - Vila Clementino, São Paulo - SP, 04039-034'
              contatos='(11) 95085 7771 / 
              jrparadesporto@uol.com.br'
              site='https://www.jrparadesporto.com.br'
            />
          </div>
          <div className='centralizacao' align='center'>
            <br /><br /><Link to='/adicionarLocal' className='botaoAdicionar'>Adicionar Local</Link>
          </div>
        </div>
      </div>
    </section>

  );
}