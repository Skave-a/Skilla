import { formatTime } from '@/utils';
import styles from './audioPlayer.module.scss';
import play from '@/assets/player/play.svg';
import pause from '@/assets/player/pause.png';
import { useEffect, useRef, useState } from 'react';
import { getCallRecordAudio } from '../../app/api/api';
import downl from '@/assets/player/downl.svg';

export const AudioPlayer = ({
  time,
  record,
  partnership_id,
}: {
  time: number;
  record: string;
  partnership_id: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState<HTMLAudioElement>();

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
      setCurrentTime((audioElement.currentTime / audioElement.duration) * 100);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const audioUser = await getCallRecordAudio(record, partnership_id);
      setAudio(audioUser);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.playerControls}>
      <audio ref={audioRef} src={audio?.src} onTimeUpdate={handleTimeUpdate} />
      <p style={{ marginRight: '12px', marginLeft: '19px' }}>{formatTime(time)}</p>
      {isPlaying ? (
        <img src={pause} alt="pause" onClick={togglePlay} className={styles.btnPlayer} />
      ) : (
        <img src={play} alt="play" onClick={togglePlay} className={styles.btnPlayer} />
      )}
      <div className={styles.progressContainer} style={{ marginRight: '11px' }}>
        <div
          className={styles.progressContainer}
          style={{ width: `${currentTime}%`, backgroundColor: '#fff' }}
        />
      </div>
      <img src={downl} alt="downl" />
    </div>
  );
};
