import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <div className='p-5'>
                <p className='text-3xl font-bold'>Hi there! 👋</p>
              </div>
            }
          />
        </Route>
        <Route path='*' element={<div />} />
      </Routes>
    </Router>
  );
}
