import { useEffect, useRef, useState } from 'react';
import styles from './dropdown.module.scss';

interface DropdownProps {
  options: {
    label: string;
    value: number;
  }[];
  setCalls: (value: number) => void;
}

interface OptionsDropdown {
  label: string;
  value: number;
}

export function Dropdown(props: DropdownProps) {
  const { options, setCalls } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsDropdown>(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: OptionsDropdown) => {
    setSelectedOption(option);
    setIsOpen(false);
    setCalls(option.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption.label}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.dropdownMenuItem}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
