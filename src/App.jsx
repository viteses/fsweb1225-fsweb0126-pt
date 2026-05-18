import { useState } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Browse from "./pages/Browse";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [profile, setProfile] = useState("blue");

  function loginUser() {
    setLoggedUser("Emre");
  }
  return (
    <>
      <Switch>
        <Route path="/browse">
          <Browse profile={profile} />
        </Route>
        <Route path="/login">
          <Login setLoggedUser={setLoggedUser} />
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
