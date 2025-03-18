import { Link } from "react-router-dom";

export default function Erro(){
    return (
      <div>
        <h1>Hum!, parece que essa pagina não existe</h1><br/><br/>
        <span>Você pode esta procurando:</span><br/>
        <Link to="/"> Home </Link><br/>
        <Link to="/contato"> Contatos </Link><br/>
        <Link to="/sobre"> Sobre </Link><br/>
      </div>
    );
  }