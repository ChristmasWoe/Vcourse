import Login from '../pages/Login/Login';
import './App.css';
import SelectLanguage from '../features/SelectLanguage/SelectLanguage';

export const App = () => {
  return (
    <div id="root">
      <div className="app">
        <SelectLanguage />
        <Login />
      </div>
    </div>
  );
};

// export default App;
