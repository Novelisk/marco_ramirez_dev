import { Routes, Route } from 'react-router-dom';

import { Header } from './assets/components/Header/Header';
import { Main } from './assets/pages/Main/Main';
import { Terms } from './assets/pages/Terms/Terms';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
