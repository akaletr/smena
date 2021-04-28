import React, {useContext} from "react";
import {Menu} from 'antd';
import {
  UserOutlined,
  ShopOutlined,
  CheckSquareOutlined,
  LogoutOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import AuthContext from "../context/AuthContext";


const Navigation = () => {
  const auth = useContext(AuthContext);
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
  }

  return (
    <div>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={"inline"}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to={'/profile'}>Профиль</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />}>
          <NavLink to={'/bars'}>Все бары</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<CheckSquareOutlined />}>
          <NavLink to={'/subscriptions'}>Подписки</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<PlusOutlined />}>
          <NavLink to={'/create'}>Новый бар</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<LogoutOutlined />}>
          <a href="/" onClick={logoutHandler}>Выйти</a>
        </Menu.Item>


        {/*<SubMenu key="sub2" icon={<SettingOutlined />} title="Navigation Three">*/}
        {/*  <Menu.Item key="7">Option 7</Menu.Item>*/}
        {/*  <Menu.Item key="8">Option 8</Menu.Item>*/}
        {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
        {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
        {/*</SubMenu>*/}
      </Menu>
    </div>
  );
};

export default Navigation;