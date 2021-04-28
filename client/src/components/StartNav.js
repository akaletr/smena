import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {Components, Header} from "../styledComponents/Components";



const StartNav = () => {
  return (
    <Header>
      <Components>
        <Button>
          <NavLink to={'/register'}>Регистрация</NavLink>
        </Button>
        <Button>
          <NavLink to={'/login'}>Вход</NavLink>
        </Button>

      </Components>

    </Header>
  )
};

export default StartNav;