import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Calculator from 'routes/Calculator';
import Home from 'routes/Home';
import Quote from 'routes/Quote';
import NotFound from 'routes/404';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
