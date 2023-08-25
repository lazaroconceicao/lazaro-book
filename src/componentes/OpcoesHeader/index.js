import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const Opcoes = styled.ul`
  display: flex;
`;

const textoOpoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao className="opcao">
            <p>{texto}</p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
