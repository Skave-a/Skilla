import styles from './skillaBtn.module.scss';

export const SkillaBtn = ({ btnText, icon }: { btnText: string; icon: string }) => {
  return (
    <button className={styles.skillaBtn}>
      {btnText} <img src={icon} alt={btnText} className={styles.skillaBtnIcon}/>
    </button>
  );
};
