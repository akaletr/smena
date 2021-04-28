import {Switch, Route, Redirect} from 'react-router-dom';
import BarsPage from "./pages/BarsPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SubscribesPage from "./pages/SubscribesPage";
import CreatePage from "./pages/CreatePage";
import StartPage from "./pages/StartPage";
import RegisterPage from "./pages/RegisterPage";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path={'/profile'}>
          <ProfilePage/>
        </Route>
        <Route path={'/bars'} exact >
          <BarsPage/>
        </Route>
        <Route path={'/detail/:id'}  >
          <DetailPage/>
        </Route>
        <Route path={'/subscriptions'}  >
          <SubscribesPage/>
        </Route>
        <Route path={'/create'}>
          <CreatePage/>
        </Route>
        <Redirect to={'/profile'} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path={'/'} exact>
        <StartPage/>
      </Route>
      <Route path={'/register'} exact >
        <RegisterPage/>
      </Route>
      <Route path={'/login'} exact >
        <LoginPage/>
      </Route>
      <Redirect to={'/'} />
    </Switch>
  )
}

export default useRoutes;