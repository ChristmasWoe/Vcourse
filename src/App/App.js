import Login from '../pages/Login/Login';
import './App.css';
import React from 'react';
import SelectLanguage from '../features/SelectLanguage/SelectLanguage';

const App = () => {
  return (
    <div className="app">
      <SelectLanguage />
      <Login />
    </div>
  );
};

export default App;
