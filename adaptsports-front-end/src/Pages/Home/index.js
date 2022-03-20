import React from 'react';
import Cards from '../../Components/CardHome/Card'
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className='HomeContainer'>

        <div className='Texto1Home'>
          <h3>Viva a Diferença!</h3>
          <p>Através do nosso site você fica informado sobre tudo relacionado a prática esportiva para Pessoas Com Deficiência, até mesmo se desejar competir, você pode checar nossa pagina com locais avaliados e informações disponiveis para o seu tipo de deficiência, pode marcar visita nesses mesmos locais, ou, se quiser praticar em outros locais que não estejam na lista, pode simplesmente verificar informações voltadas para o esporte que deseja conhecer.</p>
        </div>

        <div className='Texto2Home'>
          <h3>Descubra Mais!</h3>
          <p>Aqui você tambem pode ficar informado das noticias mais atuais no mundo do esporte paraolimpico e adaptado. Visite nossa sessão de noticias para saber os mais recentes acontecimentos. Você também pode conferir nosso rodapé. Lá se encontram os horários de atendimento que nosso site possui, e clicando nos simbolos você pode acessar nossas redes sociais e saber mais sobre nossa iniciativa e melhorias que pretendemos fazer.</p>
        </div>
      </div>
      <div className='divisor divisoriaFooter'>
        <h3>Notícias</h3><br /><br /><br />
      </div>
      <div className='CardsHomeContainer'>
        <Cards
          className='CardHome'
          titulo='Pratica de esportes e aliada de pessoas com deficiencia'
          link='https://www.gaz.com.br/pratica-de-esportes-e-aliada-de-pessoas-com-deficiencia/'
          img='https://www.gaz.com.br/packages/uploads/2021/09/Basquete-cadeira-de-rodas-pessoa-com-deficiencia-2.jpg'
        /><br /><br />

        <Cards
          className='CardHome'
          titulo='Escola e meio de criancas conhecerem esporte, diz campeao paralimpico'
          img='https://imagens.ebc.com.br/yjzt6Pd59HdOTujxnOVFqVxYmyA=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/005_1.jpg?itok=IT3RLnH2'
          link='https://agenciabrasil.ebc.com.br/geral/noticia/2021-09/escola-e-meio-de-criancas-conhecerem-esporte-diz-campeao-paralimpico#'
        /><br /><br />

        <Cards
          className='CardHome'
          titulo='Penalty apoia inclusao de deficientes visuais com nova camisa do Magnus Futsal'
          img='https://maquinadoesporte.com.br/media/_versions/magnus_futsal_widelg.jpeg'
          link='https://maquinadoesporte.com.br/outros/penalty-lanca-camisa-para-apoiar-inclusao-de-deficientes-visuais'
        /><br /><br />
      </div>

    </div>
  );
}