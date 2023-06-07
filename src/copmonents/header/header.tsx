import { CallAnalytics } from '@/copmonents/callAnalytics/callAnalytics';
import styles from './header.module.scss';
import search from '@/assets/icons/search.svg';
import keyDown from '@/assets/icons/keyboard_arrow_down_black_24dp 1.svg';
import avatar from '@/assets/icons/avatar.png';

export const Header = () => {
  const date: Date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
  const dateString: string = date.toLocaleDateString('ru-RU', options);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer}  container`}>
        <p className={styles.date}>{dateString}</p>
        <CallAnalytics />
        <img src={search} alt="search" className={styles.search} />
        <div className={styles.userBlock}>
          <p className={styles.user}>ИП Сидорова Александра Михайловна</p>
          <img src={keyDown} alt="open " />
        </div>
        <div className={styles.menuUser}>
          <img src={avatar} alt="avatar" className={styles.avatar}/>
          <img src={keyDown} alt="open " />
        </div>
      </div>
    </header>
  );
};
