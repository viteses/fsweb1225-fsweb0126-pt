import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import SiteMap from "../components/SiteMap";
import styled from "styled-components";

const Container = styled.div`
  background: #431e1f;
  background: linear-gradient(
    182deg,
    rgba(67, 30, 31, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  color: white;
`;

function Login() {
  return (
    <Container>
      <Header />
      <LoginForm />
      <SiteMap />
    </Container>
  );
}

export default Login;
