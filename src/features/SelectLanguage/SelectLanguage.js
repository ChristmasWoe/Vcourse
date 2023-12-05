import './SelectLanguage.css';
import Dropdown from '~/shared/Dropdown/Dropdown';
import { useState } from 'react';

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: 'Русский',
    value: 'русский',
  });

  const handleSelect = (option) => {
    setSelectedLanguage(option);
  };

  const options = [
    {
      label: 'Русский',
      value: 'русский',
    },
    {
      label: 'English',
      value: 'english',
    },
    {
      label: 'Deutch',
      value: 'deutch',
    },
  ];
  return (
    <Dropdown
      options={options}
      value={selectedLanguage}
      onChange={handleSelect}
    />
  );
};

export default SelectLanguage;
