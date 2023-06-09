import { FILTERS } from '@/utils/constants';
import styles from './filters.module.scss';
import search from '@/assets/icons/search.svg';
// import { Select, Space } from 'antd';
import { ChangeEvent } from 'react';

export const Filters = ({ setCalls }: { setCalls: (value: number) => void }) => {
  // const handleSelect = (value: string) => {
  //   setCalls(Number(value));
  // };

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
            // <Space wrap key={filter.id}>
            //   <Select
            //     onChange={handleSelect}
            //     defaultValue={filter.menu[0].label}
            //     style={{
            //       width: 120,
            //       fontFamily: 'SF Pro Display',
            //       fontSize: '14px',
            //       color: '#5e7793',
            //       opacity: '0.87',
            //     }}
            //     bordered={false}
            //     options={filter.menu}
            //   ></Select>
            // </Space>
            <select key={filter.id}>
              <option value={filter.title}>{filter.title}</option>
            </select>
          )
        )}
      </div>
    </div>
  );
};
