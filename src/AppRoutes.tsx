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
              <div>
                <h1 className='text-3xl font-bold underline'>Hello world!</h1>
                <button className='btn btn-primary'>Hello</button>
              </div>
            }
          />
        </Route>
        <Route path='*' element={<div />} />
      </Routes>
    </Router>
  );
}
