import React from 'react';
import { Outlet, Link } from "react-router-dom";

// Component to have children in the square view.
const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
};

export default Layout;