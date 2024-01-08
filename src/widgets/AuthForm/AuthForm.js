import Button from '~/shared/Button/Button';
import Input from '~/shared/Input/Input';
import Checkbox from '~/shared/Checkbox/Checkbox';
import Link from '~/shared/Link/Link';

import { useState } from 'react';

import './AuthForm.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const AuthForm = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = createTheme({
    palette: {
      orange: {
        main: '#ff9600',
        light: '#ff9600',
        dark: '#ff8c00',
        contrastText: '#ffffff',
      },
    },
  });

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('you have been authorized but you will not see thiss');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <span className="authform-span">
        <label className="auth-form-labels">Почта</label>

        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
          color="primary"
          disableUnderline
          required
          sx={{
            width: '387px',
            height: '45px',
            flexShrink: '0',
            borderRadius: '5px',
            border: '1px solid #DCE1E6',
            paddingLeft: '14px',
          }}
        />
      </span>

      <span className="authform-span">
        <label className="auth-form-labels">Пароль</label>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          color="primary"
          disableUnderline
          required
          sx={{
            width: '387px',
            height: '45px',
            flexShrink: '0',
            borderRadius: '5px',
            border: '1px solid #DCE1E6',
            paddingLeft: '14px',
          }}
        />
      </span>
      <span className="authform-checkbox-link-span">
        <span className="authform-checkbox-span">
          <Checkbox
            checked={checked}
            onChange={handleCheck}
            label="Запомнить данные"
            size="small"
          />
        </span>

        <Link
          href="http://localhost:3000/"
          underline="hover"
          color="rgba(255, 150, 0, 1)"
          sx={{
            marginLeft: 'auto',
          }}
        >
          Забыли пароль?
        </Link>
      </span>
      <span className="authform-button-span">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="orange"
            type="submit"
            sx={{
              width: '387px',
              height: '45px',
              lineHeight: '21px',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 'normal',
              textTransform: 'none',
            }}
          >
            Войти
          </Button>
        </ThemeProvider>
        <Link
          href="http://localhost:3000/"
          underline="hover"
          color="rgba(255, 150, 0, 1)"
        >
          Зарегестрироваться
        </Link>
      </span>
    </form>
  );
};

export default AuthForm;
