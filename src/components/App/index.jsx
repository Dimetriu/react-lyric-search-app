import React, { lazy, Suspense } from 'react';
import '../../css/App.css';
import { TrackListProvider } from '../../context/TrackListContext';
import { BrowserRouter as Router } from 'react-router-dom';

const loading = <div>Loading</div>;

export default function App() {
  return (
    <TrackListProvider>
      <Router>
        <Suspense fallback={loading}>
          <Navbar />

          <div className="container">
            <Routes />
          </div>
        </Suspense>
      </Router>
    </TrackListProvider>
  );
}

const Navbar = lazy(() => import('../Navbar'));
const Routes = lazy(() => import('../../routes'));
