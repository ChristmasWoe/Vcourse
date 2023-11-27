import './SelectLanguage.css';
import Dropdown from '~/shared/Dropdown/Dropdown';
import { useState } from 'react';

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Русский');
  const languages = ['Русский', 'Английский'];
  return (
    <Dropdown
      content={languages}
      value={selectedLanguage}
      setValue={setSelectedLanguage}
    />
  );
};

export default SelectLanguage;
