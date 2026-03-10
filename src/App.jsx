import { Routes, Route } from 'react-router-dom';

import { Header } from './assets/components/Header/Header';
import { Main } from './assets/pages/Main/Main';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
