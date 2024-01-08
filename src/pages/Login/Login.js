import Logo from '~/features/Logo/Logo';
import AuthForm from '~/widgets/AuthForm/AuthForm';
import SelectLanguage from '~/features/SelectLanguage/SelectLanguage';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <SelectLanguage />
      <Logo size={154} />
      <h1>Вход</h1>
      <AuthForm />
      <p>©Project 2023</p>
    </div>
  );
};

export default Login;
