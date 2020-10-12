import React from 'react';
import Layout from 'antd/es/layout';
import Typography from 'antd/es/typography';

const {
  Title,
} = Typography;

const {
  Header,
} = Layout;

const AppHeader = () => (
  <Header
    className="app-layout_header"
  >
    <Title
      className="app-layout_header--title"
    >
      YoMess
    </Title>
  </Header>
);

export default AppHeader;
