import { Link } from "react-router-dom";

export default function Contato(){
    return (
      <div>
        <h1>Rota de contato</h1><br/>
        <Link to="/"> Home </Link><br/>
        <Link to="/sobre"> Sobre </Link><br/>
      </div>
    );
  }