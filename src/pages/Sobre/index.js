import { Link } from "react-router-dom";

export default function Sobre(){
    return (
      <div>
        <h1>Pagina de sobre</h1><br/>
        <Link to="/"> Home </Link><br/>
        <Link to="/contato"> Contatos </Link><br/>
      </div>
    );
  }