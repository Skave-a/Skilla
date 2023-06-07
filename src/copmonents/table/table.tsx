import { TABLE_HEADERS } from '@/utils/constants';
import styles from './table.module.scss';
import arrow from '@/assets/icons_table/call.svg';
import avatar from '@/assets/icons_table/avatar.png';
import { Score } from '@/copmonents/score/score';
export const Table = () => {
  return (
    <div className={styles.table}>
      <table className={styles.tableHeaders}>
        {TABLE_HEADERS.map((header) => (
          <th key={header.id} className={styles.tableHeader} style={{ paddingRight: header.p }}>
            {header.title}
          </th>
        ))}
        <tr className={styles.tr}>
          <td>
            <img src={arrow} alt="arrow" />
          </td>
          <td>19:00</td>
          <td  className={styles.td}>
            <img src={avatar} alt="avatar" />
          </td>
          <td>+7 (987) 567-17-12</td>
          <td>Rabota.ru</td>
          <td>
            <Score score="Плохо" />
          </td>
          <td>12:06</td>
        </tr>
      </table>
    </div>
  );
};
