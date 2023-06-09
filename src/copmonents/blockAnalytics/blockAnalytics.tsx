import { CALL_ANALYTICS } from '@/utils/constants';
import styles from './blockAnalytics.module.scss';

export const BlockAnalytics = () => {
  return (
    <div className={styles.blockAnalytics}>
      {CALL_ANALYTICS.map((item) => (
        <div key={item.id}>
          <p className={styles.title}>
            {item.text} <span style={{ color: item.color }}>{item.dedicatedText}</span>
          </p>
          <div className={styles.progressLine}>
            <div
              className={styles.progressLine}
              style={{ width: '51%', background: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};
