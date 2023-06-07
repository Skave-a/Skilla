import { Sidebar } from '@/copmonents/sidebar/sidebar';
import { Header } from '@/copmonents/header/header';
import styles from './main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <main>
        <Header />
      </main>
    </div>
  );
};
