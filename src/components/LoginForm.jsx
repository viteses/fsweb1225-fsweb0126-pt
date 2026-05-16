import styled from "styled-components";

const Forn = styled.form`
  width: 420px;
  height: 300px;
  border: 1px solid gray;
  margin: 0 auto;
`;
function LoginForm() {
  return (
    <Forn>
      <button>Login</button>
    </Forn>
  );
}

export default LoginForm;
