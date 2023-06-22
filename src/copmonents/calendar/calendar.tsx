import { Calendar as CalendarSVG } from '@/assets/icons/calendar';
import styles from './сalendar.module.scss';

export const Calendar = () => {
  return (
    <>
      <span>Указать даты</span>
      <div className={styles.date}>
        <input type="text" placeholder={'__.__.__'} />
        -
        <input type="text" placeholder={'__.__.__'} />
        <CalendarSVG />
      </div>
    </>
  );
};
