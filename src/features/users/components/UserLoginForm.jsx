import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import Card from 'antd/es/card';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import Space from 'antd/es/space';
import Typography from 'antd/es/typography';
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoginOutlined,
} from '@ant-design/icons';
import {
  MailUtils,
} from '../../../core';
import './UserForm.scss';

const { validateEmail, } = MailUtils;
const { Text, } = Typography;

const UserLoginForm = ({
  onLogin,
  onRegister,
  onPasswordForget,
}) => {
  const [
    inputEmail,
    setInputEmail,
  ] = useState('');
  const [
    inputPassword,
    setInputPassword,
  ] = useState('');
  const [
    inputEmailError,
    setInputEmailError,
  ] = useState(null);
  const [
    inputPasswordError,
    setInputPasswordError,
  ] = useState(null);
  return (
    <Card
      className="user_form_login--wrapper"
      bordered
    >
      <form>
        <Input
          className="user_form_login--input"
          id="user-mail"
          placeholder="Veuillez entrer votre email"
          prefix={<UserOutlined className="site-form-item-icon" />}
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event?.target?.value);
            setInputEmailError(null);
          }}
        />
        {inputEmailError && <Text type="danger">{inputEmailError}</Text>}
        <Input.Password
          className="user_form_login--input"
          placeholder="Veuillez saisir votre mot de passe"
          iconRender={(visible) => (visible
            ? <EyeTwoTone />
            : <EyeInvisibleOutlined />
          )}
          value={inputPassword}
          onChange={(event) => {
            setInputPassword(event?.target?.value);
            setInputPasswordError(null);
          }}
        />
        {inputPasswordError && <Text type="danger">{inputPasswordError}</Text>}
        <Space
          className="user_form_login--footer"
          direction="vertical"
          align="center"
        >
          <Button
            type="primary"
            icon={<LoginOutlined />}
            size="large"
            onClick={() => {
              if (validateEmail(inputEmail) && inputPassword) {
                setInputEmailError(null);
                setInputPasswordError(null);
                if (onLogin) onLogin(inputEmail, inputPassword);
              }
              if (!validateEmail(inputEmail)) {
                setInputEmailError('Veuillez saisir un email valide');
              }
              if (!inputPassword) {
                setInputPasswordError('Le mot de passe est obligatoire');
              }
            }}
          >
            Se connecter
          </Button>
          <Space
            className="user_form_login--footer"
            direction="horizontal"
            align="center"
          >
            <Button
              type="link"
              onClick={onRegister}
            >
              Inscription
            </Button>
            <Button
              type="link"
              onClick={onPasswordForget}
            >
              Mot de passe Oublié ?
            </Button>
          </Space>
        </Space>
      </form>
    </Card>
  );
};

UserLoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
  onPasswordForget: PropTypes.func.isRequired,
};

export default UserLoginForm;
