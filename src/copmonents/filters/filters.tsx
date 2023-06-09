import { FILTERS } from '@/utils/constants';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
// import { Select, Space } from 'antd';

export const Filters = () => {
  return (
    <div className={styles.blockFilters}>
      <div className={styles.filterSearch}>
        <img src={search} alt="search" className={styles.searchL} />
        <p className={styles.search}>Поиск по звонкам</p>
      </div>
      <div className={styles.blockFilters}>
        {FILTERS.map((filter) => (
          // <Space wrap>
          //   <Select
          //     defaultValue="lucy"
          //     style={{ width: 120 }}
          //     bordered={false}
          //     options={[
          //       { value: 'jack', label: 'Jack' },
          //       { value: 'lucy', label: 'Lucy' },
          //       { value: 'Yiminghe', label: 'yiminghe' },
          //     ]}
          //   />
          //   <Select
          //     defaultValue="lucy"
          //     style={{ width: 120 }}
          //     disabled
          //     bordered={false}
          //     options={[{ value: 'lucy', label: 'Lucy' }]}
          //   />
          // </Space>

          <select key={filter.id} className='select-css'>
            <option value="option1" style={{padding: '5px'}}>
              {filter.title}
            </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        ))}
      </div>
    </div>
  );
};
