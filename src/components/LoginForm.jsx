import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Forn = styled.form`
  width: 420px;
  height: 300px;
  margin: 0 auto;
  padding: 2rem;
  flex-grow: 1;
  font-size: 1.3em;
`;

const SubText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9em;
`;

const Copyright = styled(SubText)`
  font-size: 0.7em;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1em;
  border: none; /* Removes the default 3D bevel/border */
  box-shadow: none; /* Removes any artificial shadows */
  outline: none; /* Removes the default focus ring (optional) */
  appearance: none;
`;

const Button = styled.button`
  width: 100%;
  border-radius: 0.4rem;
  text-align: center;
  padding: 1rem;
  color: white;
  background: red;
  border: none; /* Removes the default 3D bevel/border */
  box-shadow: none; /* Removes any artificial shadows */
  outline: none; /* Removes the default focus ring (optional) */
  appearance: none; /* Resets platform-specific styling */
  font-size: 1em;
  margin: 1rem 0;
  cursor: pointer;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;

  &:hover {
    background: #ce0101;
  }
`;

function LoginForm(props) {
  const [formData, setFormData] = useState({ email: "" });
  const { setLoggedUser } = props;

  const history = useHistory();

  function changeHandler(event) {
    setFormData({ ...formData, email: event.target.value });
  }

  function submitHandler(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData, {
        headers: {
          "x-api-key": "reqres_fe3ebb81ea6f4f04a96c4c6737da126e",
        },
      })
      .then((res) => {
        setLoggedUser(res.data.email);
        console.log(res);
        history.push("/browse");
      });
  }

  return (
    <Forn onSubmit={submitHandler}>
      <h2>Enter your info to sign in</h2>
      <SubText>Or get started with a new account.</SubText>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
      />
      <Button>Login</Button>
      <Copyright>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </Copyright>
    </Forn>
  );
}

export default LoginForm;
