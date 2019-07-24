import React, { lazy, Suspense } from 'react';

export default function Root() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Tracks />
    </Suspense>
  );
}

const Tracks = lazy(() => import('../Tracks'));
