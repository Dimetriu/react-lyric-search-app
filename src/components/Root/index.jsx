import React, { lazy, Suspense } from 'react';

export default function Root() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TrackList />
    </Suspense>
  );
}

const TrackList = lazy(() => import('../TrackList'));
