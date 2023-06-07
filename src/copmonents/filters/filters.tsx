import { FILTERS } from '@/utils/constants';
import styles from './filters.module.scss';
import dropdown from '@/assets/icons/dropdown.svg';
import search from '@/assets/icons/search.svg';

export const Filters = () => {
  return (
    <div className={styles.blockFilters}>
      <div className={styles.filterSearch}>
        <img src={search} alt="search" className={styles.search} />
        <p className={styles.search}>Поиск по звонкам</p>
      </div>
      <div className={styles.blockFilters}>
        {FILTERS.map((filter) => (
          <div key={filter.id} className={styles.filter}>
            <p className={styles.filterTitle}>{filter.title}</p>
            <img src={dropdown} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
