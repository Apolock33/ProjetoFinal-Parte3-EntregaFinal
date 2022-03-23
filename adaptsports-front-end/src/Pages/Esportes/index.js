import React from 'react';
import ImgCard1 from '../../Assets/Img/add ciclismo.jpg'
import ImgCard2 from '../../Assets/Img/futebol5Adaptado.jpg'
import ImgCard3 from '../../Assets/Img/add.jpg'
import ImgCard4 from '../../Assets/Img/atletismoAdaptado.jpg'
import ImgCard5 from '../../Assets/Img/esgrimaAdaptada.jpg'
import ImgCard6 from '../../Assets/Img/goalballAdaptado.jpg'
import Card from '../../Components/CardEsportes/Card'
import './Esportes.css'
import Modals from '../../Components/ModalEsportes/Modal';

export default function Esportes() {
  return (
    <div>
      <div className="divisor">
        <br /><br /><h3>Esportes</h3><br />
        <p>Aqui você fica informado sobre todos os esportes adaptados que pode estar praticando nos locais registrados em nossa "Página Locais".</p>
        <br />
      </div>

      <div className="ContainerCardsEsp">
        <div className="cardsEsportesContainerModal" align="center">
          <Card
            img={ImgCard1}
            titulo='Ciclismo Adaptado'
          /><br /><br />
          <Modals
            titulo='Ciclismo Adaptado'
            informacoes='Tradicional na competição, o ciclismo paralímpico é disputado em provas de pista no velódromo e de estrada e tem algumas diferenças do ciclismo olímpico. Os atletas são divididos em classes. As bicicletas são adaptadas conforme deficiência do atleta'
          /><br />
        </div>

        <div className="cardsEsportesContainerModal" align="center">
          <Card
            img={ImgCard2}
            titulo='Futebol de 5'
          /><br /><br />
          <Modals
            titulo='Futebol de 5'
            informacoes='A Modalidade é exclusiva para cegos ou deficientes visuais. Os atletas disputam a partida vendados e se guiam pelo barulho da bola e por um guia que sinaliza com som onde fica o gol adversário. Cada time é formado por cinco jogadores – um goleiro e quatro na linha. O goleiro tem visão total e não pode ter participado de competições oficiais da Fifa nos últimos cinco anos.
          
            As partidas, normalmente, são em uma quadra de futsal adaptada, mas, desde os Jogos Paralímpicos de Atenas 2004, também têm sido praticadas em campos de grama sintética.
            Só os brasileiros subiram no lugar mais alto do pódio desde a introdução da modalidade no programa paralímpico, em 2004.'
          /><br />
        </div>
        <div className="cardsEsportesContainerModal" align="center">
          <Card
            img={ImgCard3}
            titulo='Basquete de Cadeira de Rodas'
          /><br /><br />
          <Modals
            titulo='Basquete de Cadeira de Rodas'
            informacoes='Praticado inicialmente por ex-soldados americanos que haviam participado da Segunda Guerra Mundial, o basquete em cadeira de rodas fez parte de todas as edições já realizadas dos Jogos Paralímpicos.
            As cadeiras de rodas utilizadas por homens e mulheres são adaptadas e padronizadas pelas regras da Federação Internacional de Basquete em Cadeira de Rodas. O jogador deve quicar, arremessar ou passar a bola a cada dois toques dados na cadeira. As dimensões da quadra e a altura da cesta seguem o padrão do basquete olímpico. São disputados quatro quartos de 10 minutos cada um.'
          /><br />
        </div>
      </div>

      <div className="ContainerCardsEsp">

        <div className="cardsEsportesContainerModal" align="center">
          <Card
            img={ImgCard4}
            titulo='Atletismo Adaptado'
          /><br /><br />
          <Modals
            titulo='Atletismo Adaptado'
            informacoes='Nos Jogos Paralímpicos, o atletismo tem provas de corrida, saltos, lançamentos e arremessos. Elas são disputadas por atletas com deﬁciência física, visual ou intelectual. Os atletas são divididos de acordo com funcionalidade na prática esportiva'
          /><br />
        </div>

        <div className="cardsEsportesContainerModal" align="center">
          <Card
            img={ImgCard5}
            titulo='Esgrima de Cadeira de Rodas'
          /><br /><br />
          <Modals
            titulo='Esgrima de Cadeira de Rodas'
            informacoes='Assim como na esgrima, na modalidade adaptada as provas são com espada, sabre e florete, e o objetivo é o mesmo: vence que faz mais pontos a cada toque da ponta da arma no tronco do adversário.
            Os atletas competem divididos em categorias. Na A estão atletas com mobilidade no tronco, amputados ou com limitações de movimento. Já aqueles com menos equilíbrio e reduzida mobilidade no tronco disputam na categoria B. Por fim, na categoria C, estão os tetraplégicos, com dificuldades nos movimentos do tronco, mãos e braços.'
          /><br />
        </div>

        <div className="cardsEsportesContainerModal" align="center">
        <Card
          img={ImgCard6}
          titulo='GoalBall Adaptado'
          /><br /><br />
        <Modals
          titulo='GoalBall Adaptado'
          informacoes='O goalball é a única modalidade entre as 22 que integram a Paralimpíada de Tóquio que não é uma adaptação de um esporte olímpico. Ela foi criada logo após a Segunda Guerra Mundial pelo alemão Sepp Reindle e pelo austríaco Hanz Lorezen, para reabilitar veteranos que perderam a visão durante os combates. O esporte é voltado para cegos e pessoas com deficiência visual.
          Com três de cada lado, os atletas lançam uma bola com sino para tentar marcar um gol na baliza do adversário, que tem 9m x 1,30m. A jogada deve ser rasteira ou tocar o solo pelo menos uma vez, em áreas obrigatórias, justamente para o guizo ser escutado. O jogo é disputado em dois tempos de 12 minutos, mas pode ser encerrado antes se uma das equipes chegar a dez gols de diferença no placar.'
          /><br />
        </div>
      </div>
      
    </div>
  );
}