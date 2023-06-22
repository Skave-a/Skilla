import { FILTERS } from '@/utils';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
import { Dropdown } from '../dropdown/dropdown';
import { CloseIcon } from '@/assets/icons/closeIcon';

export const Filters = ({
  setCalls,
  calls,
}: {
  setCalls: (value: number) => void;
  calls: number;
}) => {
  return (
    <div className={styles.blockFilters}>
      <div className={styles.filterSearch}>
        <img src={search} alt="search" className={styles.searchL} />
        <input type="text" className={styles.search} placeholder="Поиск по звонкам"></input>
      </div>
      <div className={styles.blockFilters}>
        {calls < 2 && (
          <div onClick={() => setCalls(2)} className={styles.hover}>
            <p className={styles.dropdownToggle}>Сбросить фильтры</p>
            <CloseIcon />
          </div>
        )}

        {FILTERS.map((filter) => (
          <Dropdown key={filter.id} options={filter.menu} setCalls={setCalls} />
        ))}
      </div>
    </div>
  );
};
