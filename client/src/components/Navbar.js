import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import AuthContext from "../context/AuthContext";
import {Components, Header} from "../styledComponents/Components";
import {Button} from "antd";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
  }
  return (
    <Header>
      <Components>
        <Button>
          <NavLink to={'/profile'}>Профиль</NavLink>
        </Button>
        <Button>
          <NavLink to={'/bars'}>Все бары</NavLink>
        </Button>
        <Button>
          <NavLink to={'/subscriptions'}>Подписки</NavLink>
        </Button>
        <Button>
          <NavLink to={'/create'}>Новый бар</NavLink>
        </Button>
        <Button>
          <a href="/" onClick={logoutHandler}>Выйти</a>
        </Button>
      </Components>
    </Header>

  )
}

export default Navbar;