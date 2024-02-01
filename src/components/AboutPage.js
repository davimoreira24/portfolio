import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          Eu sou um Desenvolvedor FullStack atualmente localizado em
          Fortaleza/CE. Eu amo criar novos projetos e gosto de constantemente me
          sentir desafiado e por isso estou sempre buscando aprender novas
          tecnologias
          <br /> <br />
          Estou interessado em toda a stack de desenvolvimento no geral. Gosto
          de experimentar coisas novas e construir projetos incríveis. Estou
          sempre buscando me atualizar e aprender novas tecnologias. Busco
          sempre otimizar o meu tempo. Adoro ler livros e praticar esportes no
          meu tempo livre.
          <br /> <br />
          Acredito que tudo seja possível quando você se concentra e se esforça
          para fazer aquilo. Você pode me contatar via email ou likedin,
          clicando no ícone a esquerda
        </Main>

        <BigTitle text="SOBRE" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
