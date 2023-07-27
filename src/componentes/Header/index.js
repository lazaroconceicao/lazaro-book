import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import InconeHeader from "../InconeHeader";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <InconeHeader />
    </HeaderContainer>
  );
}

export default Header;
