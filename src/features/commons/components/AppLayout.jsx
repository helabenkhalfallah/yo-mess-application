import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/es/layout';
import AppSiderBar from './AppSiderBar';
import AppHeader from './AppHeader';
import AppToolBar from './AppToolBar';
import './AppLayout.scss';

const {
  Content,
} = Layout;

const AppLayout = ({
  selectedMenu,
  content,
  showSideBar,
  onNewMessage,
  onMenuSelected,
}) => {
  const [
    currentSelectedMenu,
    setCurrentSelectedMenu,
  ] = useState(selectedMenu);
  const toolBarTite = currentSelectedMenu === 'home'
    ? 'Acceuil'
    : 'Messages Privés';
  return (
    <Layout
      className="app-layout"
    >
      <AppHeader />
      <Layout>
        {showSideBar && (
          <AppSiderBar
            className="app-layout_sidebar"
            selectedMenu={currentSelectedMenu}
            onMenuSelected={(key) => {
              setCurrentSelectedMenu(key);
              onMenuSelected(key);
            }}
          />
        )}
        <Layout>
          <Content
            className="app-layout_content"
          >
            <AppToolBar
              title={toolBarTite}
              onNewMessage={onNewMessage}
            />
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  selectedMenu: PropTypes.string,
  showSideBar: PropTypes.bool,
  content: PropTypes.node.isRequired,
  onMenuSelected: PropTypes.func,
  onNewMessage: PropTypes.func,
};

AppLayout.defaultProps = {
  selectedMenu: 'home',
  showSideBar: true,
  onMenuSelected: null,
  onNewMessage: null,
};

export default AppLayout;
