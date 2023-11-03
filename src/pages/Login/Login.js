import React from 'react';
import SelectLanguage from '../../features/SelectLanguage/SelectLanguage';
import Logo from '../../features/Logo/Logo';
import AuthForm from '../../widgets/AuthForm/AuthForm';
import './Login.css';

const Login = () => {
  const title = 'Вход';
  const contacts = '©Project 2023';
  return (
    <div className="login">
      <SelectLanguage />
      <Logo />
      <h1 className="auth-title">{title}</h1>
      <AuthForm />
      <p>{contacts}</p>
    </div>
  );
};

export default Login;
