import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Social from '../Social';
import GreetingImg from '../../assets/Coding-amico.svg';

import { Container, GrettingTextDiv, GrettingImgDiv, GrettingButtonDiv } from './styles';

function Greeting () {
  return (
    <Fade direction="left" delay={500} triggerOnce>
      <Container>
        <GrettingTextDiv>
          <h1>Oi, sou Carlos Alberto</h1>
          <p>
            Analista de Sistemas, desenvolvedor de software.<br />
            Amo livros, animes, filmes, jogos, desafios de lógicas e programação e café!
            Sempre estudando, aprendendo e ensinando.
          </p>
          <span>"Se quer ser alguém na vida, mostre para a vida que você é alguém." Carlos Alberto</span>
          
          <Social />
          <GrettingButtonDiv>
                <form>
                    <a href="#contact" class="button">
                        Contato
                    </a>
                </form>
          </GrettingButtonDiv>
        </GrettingTextDiv>
        
        <GrettingImgDiv>
          <img src={GreetingImg} alt="gretting" />
        </GrettingImgDiv>
      </Container>
    </Fade>
  );
}

export default Greeting;
