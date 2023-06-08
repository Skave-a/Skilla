import { TABLE_HEADERS } from '@/utils/constants';
import styles from './table.module.scss';
import { Score } from '@/copmonents/score/score';
import { getAudio, getCalls } from '@/app/api/api';
import { useEffect, useState } from 'react';
import { formatPhoneNumber, formatTime, getArrowImage, getTimeFromDateTime } from '@/utils/fns';
import { ITableData } from '@/utils/types';
import { AudioPlayer } from '../audioPlayer/audioPlayer';

export const Table = () => {
  const [calls, setCalls] = useState<ITableData[]>();
  const [audio, setAudio] = useState();
  const [hoveredItemId, setHoveredItemId] = useState<null | number>(null);

  useEffect(() => {
    async function fetchData() {
      const callsData = await getCalls();
      const audioUser = await getAudio('MToxMDA2NzYxNToxNDM0ODcwNDQzMzow', '136');
      setCalls(callsData);
      setAudio(audioUser);
    }
    fetchData();
  }, []);

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
            <th>
              <label>
                <input type="checkbox" name="allCalls" className={styles.checkB} />
              </label>
            </th>
            {TABLE_HEADERS.map((header) => (
              <th
                key={header.id}
                className={styles.tableHeader}
                // style={{ paddingRight: header.p }}
                style={{ width: header.width }}
              >
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
                <img src={getArrowImage(item.status)} alt="arrow" />
              </td>
              <td className={styles.num}>{getTimeFromDateTime(item.date)}</td>
              <td className={styles.td}>
                <img src={item.person_avatar} alt="avatar" className={styles.avatar} />
              </td>
              <td className={styles.num}>{formatPhoneNumber(item.from_number)}</td>
              <td>{item.source}</td>
              <td>
                <Score score="Отлично" />
              </td>
              <td style={{ textAlign: 'right', paddingRight: '45px' }} className={styles.num}>
                {hoveredItemId === item.id ? (
                  <AudioPlayer audio={audio} time={item.time} />
                ) : (
                  formatTime(item.time)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
