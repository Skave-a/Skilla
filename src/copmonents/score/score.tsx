import styles from './score.module.scss';

export const Score = ({ score }: { score: string }) => {
  const count = score === 'Отлично' ? 3 : score === 'Хорошо' ? 2 : 1;
  const color = score === 'Отлично' ? '#28a879' : score === 'Хорошо' ? '#ADBFDF' : '#EA1A4F';
  const colorBack = score === 'Отлично' ? '#DBF8EF' : score === 'Хорошо' ? '#D8E4FB' : '#FEE9EF';

  const dots = Array.from({ length: count }, (_, i) => (
    <span className={styles.dot} style={{ backgroundColor: color }} key={i} />
  ));

  const text = score === 'Отлично' ? 'Отлично' : score === 'Хорошо' ? 'Хорошо' : 'Плохо';

  return (
    <>
      <div className={styles.dots}>{dots}</div>
      <p style={{ color: color, background: colorBack }} className={styles.text}>{text}</p>
    </>
  );
};
