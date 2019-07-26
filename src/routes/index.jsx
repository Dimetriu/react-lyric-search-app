import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const loading = <p>Loading...</p>;

export default function Routes() {
  return (
    <Switch>
      <Suspense fallback={loading}>
        <Route exact path="/" component={Root} />
        <Route path="/internal-server-error" component={InternalServerError} />
      </Suspense>
    </Switch>
  );
}

const Root = lazy(() => import('../components/Root'));
const InternalServerError = lazy(() => import('../components/errors/InternalServerError'));
