import { Routes, Route, Outlet } from 'react-router-dom';

import { Header } from './assets/components/Header/Header';
import { Footer } from './assets/components/Footer/Footer';
import { Main } from './assets/pages/Main/Main';
import { Privacy } from './assets/pages/Privacy/Privacy';
import { Terms } from './assets/pages/Terms/Terms';
import { NotFound } from './assets/pages/NoFound/NotFound';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/policy" element={<Privacy />} />
        </Route>

        <Route element={<Layout />}>
          <Route path="/terms" element={<Terms />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
