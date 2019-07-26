import React from 'react';
import { Redirect } from 'react-router-dom';

export default function InternalServerError({ error }) {
  if (error) return <h1>500 Internal Server Error</h1>;

  return <Redirect to={{ pathname: "/" }} />;
}
