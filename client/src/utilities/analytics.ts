import ReactGa from 'react-ga';
import Router from 'next/router';
import qs from 'qs';

import { GA_TRACKING_ID } from '@constants/head';

export function initializeGoogleAnalytics() {
  const dev = process.env.NODE_ENV !== 'production';

  if (dev || !GA_TRACKING_ID) return;

  ReactGa.initialize(GA_TRACKING_ID, { debug: dev });
  ReactGa.pageview([Router.pathname, qs.stringify(Router.query)].join('?'));
}
