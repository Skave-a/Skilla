import { Sidebar } from '@/copmonents/sidebar/sidebar';
import { Header } from '@/copmonents/header/header';
import styles from './main.module.scss';
import { Content } from '@/copmonents/content/content';

export const Main = (): JSX.Element => {
  return (
    <div className={styles.main}>
      <Sidebar />
      <main>
        <Header />
        <Content />
      </main>
    </div>
  );
};
