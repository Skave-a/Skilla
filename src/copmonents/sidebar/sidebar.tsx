import { MENU, MENU_BNTS } from '@/utils/constants';
import styles from './sidebar.module.scss';
import logo from '@/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { SkillaBtn } from '@/copmonents/button/skillaBtn';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? styles.active : styles.pending;

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.menu}>
        {MENU.map((item) => (
          <NavLink to={item.link} className={setActive}>
            <img src={item.icon} alt={item.name} className={styles.menuItemIcon}/>
            {item.name}
            <span className={styles.dot}></span>
          </NavLink>
        ))}
      </div>
      <div className={styles.menuBtns}>
        {MENU_BNTS.map((btn) => (
          <SkillaBtn btnText={btn.text} icon={btn.icon} key={btn.id} />
        ))}
      </div>
    </div>
  );
};
