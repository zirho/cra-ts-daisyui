import { ReactNode } from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className='container px-5'>
      {children || <Outlet />}
      <Footer />
    </div>
  );
}

export default Layout;
