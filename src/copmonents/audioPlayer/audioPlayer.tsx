import { formatTime } from '@/utils/fns';
import styles from './audioPlayer.module.scss';
import play from '@/assets/player/play.svg';
import { useRef, useState } from 'react';

export const AudioPlayer = ({ audio, time }: { audio: string | undefined; time: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement && isPlaying) {
      audioElement.pause();
    } else if (audioElement) {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  return (
    <div className={styles.playerControls}>
      <audio ref={audioRef} src={audio} onTimeUpdate={handleTimeUpdate} />
      <p style={{ marginRight: '12px', marginLeft: '19px' }}>{formatTime(time)}</p>

      <img src={play} alt="play" style={{ marginRight: '8px' }} onClick={togglePlay} />
      <div className={styles.progressContainer} style={{ marginRight: '11px' }}>
        <div
          className={styles.progressContainer}
          style={{ width: `${currentTime}%`, borderColor: '#fff' }}
        />
      </div>
      <button className={styles.downl} style={{ marginTop: '-5px' }}></button>
    </div>
  );
};
