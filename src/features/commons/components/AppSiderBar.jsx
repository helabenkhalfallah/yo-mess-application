import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';
import Popconfirm from 'antd/es/popconfirm';
import {
  HomeOutlined,
  MailOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const {
  Sider,
} = Layout;

const AppSiderBar = ({
  className,
  selectedMenu,
  onMenuSelected,
}) => {
  const [
    currentSelectedMenu,
    setCurrentSelectedMenu,
  ] = useState(selectedMenu);
  return (
    <Sider
      className={className}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[
          currentSelectedMenu,
        ]}
        selectedKeys={[
          currentSelectedMenu,
        ]}
        onSelect={({ key, }) => {
          if (key !== 'logout') {
            setCurrentSelectedMenu(key);
            onMenuSelected(key);
          }
        }}
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
          <Popconfirm
            placement="left"
            title="Êtes vous sure de vouloir se déconnecter ?"
            okType="danger"
            icon={(
              <QuestionCircleOutlined className="app-layout_sidebar--icon" />
            )}
            onConfirm={() => onMenuSelected('logout')}
            okText="Valider"
            cancelText="Annuler"
          >
            Déconnexion
          </Popconfirm>
        </Menu.Item>
      </Menu>
    </Sider>
  )
};

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
