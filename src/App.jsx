import { Routes, Route } from 'react-router-dom';

import { Header } from './assets/components/Header/Header';
import { Footer } from './assets/components/Footer/Footer';
import { Main } from './assets/pages/Main/Main';
import { Privacy } from './assets/pages/Privacy/Privacy';
import { Terms } from './assets/pages/Terms/Terms';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
