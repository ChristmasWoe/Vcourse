import './AuthForm.css';
import Form from '../../entities/Form/Form';

const AuthForm = () => {
  const title = 'Вход';
  const contacts = '©Project 2023';
  return (
    <div>
      <h1 className="auth-title">{title}</h1>
      <Form />
      <p>{contacts}</p>
    </div>
  );
};

export default AuthForm;
