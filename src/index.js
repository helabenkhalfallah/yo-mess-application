import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import 'antd/es/button/style';
import 'antd/es/input/style';
import 'antd/es/card/style';
import 'antd/es/tooltip/style';
import 'antd/es/space/style';
import 'antd/es/typography/style';
import 'antd/es/spin/style';
import 'antd/es/message/style';
import 'antd/es/layout/style';
import 'antd/es/menu/style';
import 'antd/es/popconfirm/style';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Router />,
  document.getElementById('root')
);
