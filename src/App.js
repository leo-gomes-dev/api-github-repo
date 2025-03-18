import Routes from "./routes";
import { Container, Head, H1, Titulo, Description } from './style';

export default function App(){
  return (
    <>
      <Routes/>
      <Container className="container">
        <Head className="header">
        <H1 className="titulo"> Bem vindo ao sistema</H1>
        </Head>
          <Titulo href="#">Projeto teste</Titulo>
          <Description cor="#11dd25" tamanho="30">
            Essa é uma breve descrição
          </Description>
      </Container>
    </>
  );
}