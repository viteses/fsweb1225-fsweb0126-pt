import styled from "styled-components";

const Container = styled.header`
  height: 5rem;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
  padding: 0 4rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: red;
  margin: 0;
`;

function Header() {
  return (
    <Container>
      <Logo>WitFLiX</Logo>
    </Container>
  );
}

export default Header;
