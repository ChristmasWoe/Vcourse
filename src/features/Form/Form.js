import './AuthForm.css';
import EmailInput from '../EmailInput/EmailInput';
import PassInput from '../PassInput/PassInput';
import LoginButton from '../LoginButton/LoginButton';
import MemorisePassCheckbox from '../MemorisePassCheckbox/MemorisePassCheckbox';

const Form = () => {
  return (
    <form className="auth-form">
      <label>Почта</label>
      <input placeholder="example@gmail.ru" type="email"></input>
      <label>Пароль</label>
      <input type="password"></input>
      <span className="checkbox-line">
        <span className="checkbox-group">
          <input type="checkbox" className="checkbox" />
          <p>Запомнить пароль</p>
        </span>
        <a href="/">Забыли пароль</a>
      </span>
      <button>Войти</button>
      <a href="/">Зарегистрироваться</a>
    </form>
  );
};
export default Form;
