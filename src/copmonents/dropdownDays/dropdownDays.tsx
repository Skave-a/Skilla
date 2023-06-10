import { useEffect, useRef, useState } from 'react';
import styles from './dropdownDays.module.scss';
import { TABLE_DATA } from '@/utils';

interface OptionsDropdown {
  label: string | React.ReactNode;
  value: number;
}

export function DropdownDays() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsDropdown>(TABLE_DATA[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: OptionsDropdown) => {
    setSelectedOption(option);
    setIsOpen(false);
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
          {TABLE_DATA.map((option) => (
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
