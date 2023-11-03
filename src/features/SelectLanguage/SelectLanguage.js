import React from 'react';
import './SelectLanguage.css';

const SetLanguage = () => {
  return (
    <div className="set-language">
      Русский
      <svg
        className="arrow-down"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.66666 6L7.99999 11.3333L13.3333 6"
          stroke="black"
          strokeOpacity="0.32"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SetLanguage;
