import React, { lazy, Suspense } from 'react';
import '../../css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const loading = <div>Loading</div>;

export default function App() {
  return (
    <Router>
      <>
        <Suspense fallback={loading}>
          <Navbar />

          <div className="container">
            <Routes />
          </div>
        </Suspense>
      </>
    </Router>
  );
}

const Navbar = lazy(() => import('../Navbar'));
const Routes = lazy(() => import('../../routes'));
