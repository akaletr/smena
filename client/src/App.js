import useRoutes from "./routes";
import {BrowserRouter} from 'react-router-dom';
import useAuth from "./hooks/auth.hook";
import AuthContext from "./context/AuthContext";
import Navbar from "./components/Navbar";
import StartNav from "./components/StartNav";
import {useEffect} from "react";
import Navigation from "./components/Navigation";
import styled from "styled-components";

const Body = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`

function App() {
  const {login, logout, userId, token} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  useEffect(() => {

  }, [])
  return (
    <AuthContext.Provider value={{login, logout, userId, token, isAuthenticated}}>
      <BrowserRouter>
        {!isAuthenticated ? <StartNav/> : null}
        <Body>
          {isAuthenticated ? <Navigation/> : null}
          {routes}
        </Body>

      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
