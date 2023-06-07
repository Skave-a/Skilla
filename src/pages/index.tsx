import { Main } from '@/pages/main';
import { Route, Routes } from 'react-router-dom';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="test" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Route>
    </Routes>
  );
};
