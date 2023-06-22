import { FILTERS } from '@/utils';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
import { Dropdown } from '../dropdown/dropdown';

export const Filters = ({ setCalls }: { setCalls: (value: number) => void }) => {
  return (
    <div className={styles.blockFilters}>
      <div className={styles.filterSearch}>
        <img src={search} alt="search" className={styles.searchL} />
        <input type="text" className={styles.search} placeholder="Поиск по звонкам"></input>
      </div>
      <div className={styles.blockFilters}>
        {FILTERS.map((filter) => (
          <Dropdown key={filter.id} options={filter.menu} setCalls={setCalls} />
        ))}
      </div>
    </div>
  );
};
