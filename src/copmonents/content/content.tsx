import styles from './content.module.scss';
import plus from '@/assets/bntIcons/plus.svg';
import left from '@/assets/icons/keyboard_arrow_left.svg';
import right from '@/assets/icons/keyboard_arrow_right.svg';
import calendar from '@/assets/icons/icon-calendar.svg';

export const Content = () => {
  return (
    <div className={`container ${styles.content}`}>
      <div className={styles.title}>
        <button className={styles.btnBalance}>
          Баланс: <span className={styles.balance}>&nbsp; 272 ₽</span>
          <object type="image/svg+xml" data={plus} className={styles.plus} />
        </button>
        <div className={styles.blockDays}>
          <img src={left} alt="left" />
          <img src={calendar} alt="calendar" />
          <p className={styles.days}>3 дня</p>
          <img src={right} alt="right" />
        </div>
      </div>
    </div>
  );
};
