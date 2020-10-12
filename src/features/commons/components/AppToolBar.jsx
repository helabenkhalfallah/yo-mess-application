import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import { MailOutlined, } from '@ant-design/icons';

const {
  Title,
} = Typography;

const AppToolBar = ({
  title,
  onNewMessage,
}) => (
  <Row>
    <Col span={8}>
      <Title>{title}</Title>
    </Col>
    <Col
      span={8}
      offset={8}
    >
      <Button
        type="danger"
        shape="circle"
        icon={<MailOutlined />}
        size="large"
        onClick={onNewMessage}
      />
    </Col>
  </Row>
);

AppToolBar.propTypes = {
  title: PropTypes.string.isRequired,
  onNewMessage: PropTypes.func,
};

AppToolBar.defaultProps = {
  onNewMessage: null,
};

export default AppToolBar;
