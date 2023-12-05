import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';

import './Dropdown.css';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="dropdown-option"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="dropdown" ref={divEl}>
      <div className="dropdown-selected" onClick={handleClick}>
        {value.label}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div className="dropdown-rendered-options">{renderedOptions}</div>
      )}
    </div>
  );
};

export default Dropdown;
