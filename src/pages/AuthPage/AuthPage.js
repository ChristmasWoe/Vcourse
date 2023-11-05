import SetLanguage from '../../components/SetLanguage/SetLanguage';
import Logo from '../../components/Logo/Logo';
import AuthForm from './AuthForm/AuthForm';
import './AuthPage.css';

const AuthPage = () => {
  const title = 'Вход';
  const contacts = '©Project 2023';
  return (
    <div className="auth-page">
      <SetLanguage />
      <Logo />
      <h1 className="auth-title">{title}</h1>
      <AuthForm />
      <p>{contacts}</p>
    </div>
  );
};

export default AuthPage;
