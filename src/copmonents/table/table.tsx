import { useEffect, useState } from 'react';
import {
  TABLE_HEADERS,
  formatPhoneNumber,
  formatTime,
  getArrowImage,
  getTimeFromDateTime,
  ITableData,
} from '@/utils';
import styles from './table.module.scss';
import { getCalls } from '@/app/api/api';
import { AudioPlayer } from '@/copmonents';

export const Table = ({ in_out }: { in_out: number }) => {
  const [calls, setCalls] = useState<ITableData[]>();
  const [hoveredItemId, setHoveredItemId] = useState<null | number>(null);

  useEffect(() => {
    async function fetchData() {
      const callsData = await getCalls(in_out);
      setCalls(callsData);
    }
    fetchData();
  }, [in_out]);

  function handleMouseEnter(itemId: number) {
    setHoveredItemId(itemId);
  }

  function handleMouseLeave() {
    setHoveredItemId(null);
  }

  return (
    <div className={styles.table}>
      <table className={styles.tableBlock}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>
              <label>
                <input type="checkbox" name="allCalls" className={styles.checkB} />
              </label>
            </th>
            {TABLE_HEADERS.map((header) => (
              <th key={header.id} className={styles.tableHeader} style={{ width: header.width }}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calls?.map((item) => (
            <tr
              className={styles.tr}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <td>
                <label style={{ margin: '0 12px' }}>
                  <input type="checkbox" name={item.date} className={styles.checkB} />
                </label>
              </td>
              <td>
                <img src={getArrowImage(item.in_out)} alt="arrow" />
              </td>
              <td className={styles.num}>{getTimeFromDateTime(item.date)}</td>
              <td className={styles.td}>
                <img src={item.person_avatar} alt="avatar" className={styles.avatar} />
              </td>
              <td className={styles.num}>{formatPhoneNumber(item.from_number)}</td>
              <td>{item.source}</td>
              <td className={styles.err}>{item.errors[0]}</td>
              <td
                style={{
                  textAlign: 'right',
                }}
                className={styles.num}
              >
                {hoveredItemId === item.id && item.time > 0 ? (
                  <AudioPlayer
                    time={item.time}
                    record={item.record}
                    partnership_id={item.partnership_id}
                  />
                ) : item.time > 0 ? (
                  formatTime(item.time)
                ) : (
                  ''
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
