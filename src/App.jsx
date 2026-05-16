import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  function loginUser() {
    setLoggedUser("Emre");
  }
  return (
    <>
      <Switch>
        <Route path="/browse">
          <h1>Browse</h1>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {loggedUser ? <Redirect to="/browse" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
      <button onClick={loginUser}>Login User</button>
    </>
  );
}

export default App;
