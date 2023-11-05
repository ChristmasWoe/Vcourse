import React from 'react';
import './AuthForm.css';
import Form from '../../features/Form/Form';
import RegisterLink from '../../features/RegisterLink/RegisterLink';
import ForgottenPassLink from '../../features/ForgottenPassLink/ForgottenPassLink';

const AuthForm = () => {
  const title = 'Вход';
  const contacts = '©Project 2023';
  return (
    <div>
      <h1 className="auth-title">{title}</h1>
      <Form />
      <RegisterLink />
      <ForgottenPassLink />
      <p>{contacts}</p>
    </div>
  );
};

export default AuthForm;
