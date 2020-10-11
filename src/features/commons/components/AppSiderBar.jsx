import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';
import {
  HomeOutlined,
  MailOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const {
  Sider,
} = Layout;

const AppSiderBar = ({
  className,
  selectedMenu,
  onMenuSelected,
}) => (
  <Sider
    className={className}
    breakpoint="lg"
    collapsedWidth="0"
  >
    <div className="logo" />
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[
        selectedMenu,
      ]}
      onSelect={({ key, }) => onMenuSelected(key)}
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
      >
        Acceuil
      </Menu.Item>
      <Menu.Item
        key="messages"
        icon={<MailOutlined />}
      >
        Messages Privés
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
      >
        Déconnexion
      </Menu.Item>
    </Menu>
  </Sider>
);

AppSiderBar.propTypes = {
  selectedMenu: PropTypes.string,
  onMenuSelected: PropTypes.func,
  className: PropTypes.string,
};

AppSiderBar.defaultProps = {
  selectedMenu: 'home',
  onMenuSelected: null,
  className: null,
};

export default AppSiderBar;
