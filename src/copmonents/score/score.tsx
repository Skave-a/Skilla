import styles from './score.module.scss';

export const Score = ({ score }: { score: string }) => {
  
  const count = score === 'Отлично' ? 3 : score === 'Хорошо' ? 2 : 1;
  const color = score === 'Отлично' ? '#28a879' : score === 'Хорошо' ? '#ADBFDF' : '#EA1A4F';
  const dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(<span className={styles.dot} style={{ backgroundColor: color }}></span>);
  }

  return (
    <>
      <div className={styles.dots}>{dots}</div>
    </>
  );
};
