import Button from '~/shared/Button/Button';
import Input from '~/shared/Input/Input';
import Checkbox from '~/shared/Checkbox/Checkbox';
import Link from '~/shared/Link/Link';

import { useState } from 'react';

import './AuthForm.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const AuthForm = () => {
  const [checked, setChecked] = useState(false);

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

  return (
    <form className="auth-form">
      <label>Почта</label>
      <Input />
      <label>Пароль</label>
      <Input></Input>
      <Checkbox
        checked={checked}
        onChange={handleCheck}
        label="Запомнить данные"
        size="small"
      />
      <Link />
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="orange" className="auth-form-button">
          Войти
        </Button>
      </ThemeProvider>
      <Link />
    </form>
  );
};

export default AuthForm;
