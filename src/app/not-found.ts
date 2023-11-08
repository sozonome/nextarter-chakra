import type { Metadata } from 'next';

import Page404 from '~/lib/pages/404';

export const metadata: Metadata = {
  title: '404 Not Found',
};

export const runtime = 'edge';

export default Page404;
