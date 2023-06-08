import { TABLE_HEADERS } from '@/utils/constants';
import styles from './table.module.scss';
import { Score } from '@/copmonents/score/score';
import { getCalls } from '@/app/api/api';
import { useEffect, useState } from 'react';
import { formatPhoneNumber, formatTime, getArrowImage, getTimeFromDateTime } from '@/utils/fns';
import { ITableData } from '@/utils/types';

export const Table = () => {
  const [calls, setCalls] = useState<ITableData[]>();

  useEffect(() => {
    async function fetchData() {
      const callsData = await getCalls();
      setCalls(callsData);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.table}>
      <table className={styles.tableHeaders}>
        <thead>
          <tr>
            {TABLE_HEADERS.map((header) => (
              <th key={header.id} className={styles.tableHeader} style={{ paddingRight: header.p }}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calls?.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td>
                <img src={getArrowImage(item.status)} alt="arrow" />
              </td>
              <td>{getTimeFromDateTime(item.date)}</td>
              <td className={styles.td}>
                <img src={item.person_avatar} alt="avatar" />
              </td>
              <td>{formatPhoneNumber(item.from_number)}</td>
              <td>{item.source}</td>
              <td style={{ display: 'flex', alignItems: 'center' }}>
                <Score score="Отлично" />
              </td>
              <td>{formatTime(item.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
