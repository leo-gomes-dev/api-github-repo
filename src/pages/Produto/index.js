// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Produto(){
  const { id } = useParams();
    return (
      <div>
        <h1>Grade de Produtos </h1><br/>
        <span>Você pode esta procurando: { id }</span><br/>

      </div>
    );
  }