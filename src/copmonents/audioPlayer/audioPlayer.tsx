import { formatTime } from '@/utils/fns';
import styles from './audioPlayer.module.scss';
import play from '@/assets/player/play.svg';

export const AudioPlayer = ({ audio, time }: { audio: string | undefined; time: number }) => {
  return (
    <div className={styles.playerControls}>
      <audio src={audio}></audio>
      <p style={{ marginRight: '12px', marginLeft: '19px' }}>{formatTime(time)}</p>

      <img src={play} alt="play" style={{ marginRight: '8px' }} />
      <div className={styles.progressContainer} style={{ marginRight: '11px' }}>
        <div className={styles.progress}></div>
      </div>
      <button className={styles.downl} style={{ marginTop: '-5px' }}></button>
    </div>
  );
};
