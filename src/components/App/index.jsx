import React, { lazy, Suspense } from 'react';
import '../../css/App.css';

const loading = <div>Loading</div>;

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={loading}>
        <Navbar />
      </Suspense>
    </main>
  );
}

const Navbar = lazy(() => import('../Navbar'));
