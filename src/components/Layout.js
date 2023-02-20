import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const Layout = () => (
  <main className="main-layout">
    <Navbar />
    <Outlet />
  </main>
);

export default Layout;
