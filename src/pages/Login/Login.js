import Logo from '../../features/Logo/Logo';
import AuthForm from '../../widgets/AuthForm/AuthForm';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <Logo />
      <AuthForm />
    </div>
  );
};

export default Login;
