import { FILTERS } from '@/utils/constants';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
import { ChangeEvent } from 'react';
// import { Select, Space } from 'antd';

export const Filters = ({ setCalls }: { setCalls: (value: number) => void }) => {
  // const [calls, setCalls] = useState('');

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
            <select key={filter.id} className="select-css" onChange={(e) => handleSelect(e)}>
              {filter.menu.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          ) : (
            <select key={filter.id} className="select-css">
              <option value={filter.title}>{filter.title}</option>
            </select>
          )
        )}
      </div>
    </div>
  );
};

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
