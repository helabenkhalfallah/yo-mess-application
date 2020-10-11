import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'antd/es/layout';
import AppSiderBar from './AppSiderBar';
import './AppLayout.scss';

const {
  Header,
  Content,
} = Layout;

const AppLayout = ({
  selectedMenu,
  content,
  onMenuSelected,
}) => (
  <Layout
    className="app-layout"
  >
    <Header
      className="app-layout_header"
    >
      Header
    </Header>
    <Layout>
      <AppSiderBar
        className="app-layout_sidebar"
        selectedMenu={selectedMenu}
        onMenuSelected={onMenuSelected}
      />
      <Layout>
        <Content
          className="app-layout_content"
        >
          {content}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

AppLayout.propTypes = {
  selectedMenu: PropTypes.string,
  onMenuSelected: PropTypes.func,
  content: PropTypes.node.isRequired,
};

AppLayout.defaultProps = {
  selectedMenu: 'home',
  onMenuSelected: null,
};

export default AppLayout;
