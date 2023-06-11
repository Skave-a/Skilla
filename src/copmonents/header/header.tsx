import { CallAnalytics } from '@/copmonents';
import styles from './header.module.scss';
import keyDown from '@/assets/icons/keyboard_arrow_down_black_24dp 1.svg';
import avatar from '@/assets/icons/avatar.png';
import { Search } from '@/assets/icons/search';

export const Header = () => {
  const date: Date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'short' };
  const dateString: string = date.toLocaleDateString('ru-RU', options);
  const dateToday = `${dateString.charAt(0).toUpperCase()}${dateString.slice(1)}`;

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer}  container`}>
        <p className={styles.date}>{dateToday}</p>
        <CallAnalytics />
        <div className="search">
          <Search />
        </div>
        <div className={styles.userBlock}>
          <p className={styles.user}>ИП Сидорова Александра Михайловна</p>
          <img src={keyDown} alt="open " />
        </div>
        <div className={styles.menuUser}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <img src={keyDown} alt="open " />
        </div>
      </div>
    </header>
  );
};
