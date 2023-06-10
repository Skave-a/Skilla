import { FILTERS } from '@/utils';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
import { ChangeEvent } from 'react';

export const Filters = ({ setCalls }: { setCalls: (value: number) => void }) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCalls(Number(e.target.value));
  };

  return (
    <div className={styles.blockFilters}>
      <div className={styles.filterSearch}>
        <img src={search} alt="search" className={styles.searchL} />
        <p className={styles.search}>Поиск по звонкам</p>
      </div>
      <div className={styles.blockFilters}>
        {FILTERS.map((filter) =>
          filter.menu ? (
            <select key={filter.id} onChange={(e) => handleSelect(e)}>
              {filter.menu.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          ) : (
            <select key={filter.id}>
              <option value={filter.title}>{filter.title}</option>
            </select>
          )
        )}
      </div>
    </div>
  );
};
