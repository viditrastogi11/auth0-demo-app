import logo from "./logo.svg";
import "./App.css";
import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect } from "react";
function App() {
  const {
    getAccessTokenSilently,
    loginWithPopup,
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({});
    }
  }, [isAuthenticated]);
  return (
    <div className="App">
      <h1>Auth0 App</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
        <li>
          <button onClick={()=>{window.open('http://localhost:8000/login')}}>Go To Application 2</button>
        </li>
        {isAuthenticated ? "Logged in" : "Not Logged In"}
        <pre style={{ textAlign: "start" }}>
          {isAuthenticated ? JSON.stringify(user, null, 2) : ""}
        </pre>
      </ul>
    </div>
  );
}

export default App;
