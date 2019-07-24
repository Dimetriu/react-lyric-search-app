import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const loading = <p>Loading...</p>;

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={loading}>
        <Route exact path="/" component={Root} />
      </Suspense>
    </Switch>
  );
}

const Root = lazy(() => import('../components/Root'));
