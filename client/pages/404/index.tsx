import React from 'react';
import Layout from '@layout/Section';
import { NOT_FOUND } from '@language/';

function NotFound() {
  return <Layout>{NOT_FOUND.heading}</Layout>;
}

export default NotFound;
