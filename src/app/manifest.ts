import type { MetadataRoute } from 'next';

const manifest: MetadataRoute.Manifest = {
  short_name: 'nextarter-chakra',
  name: 'Next.js App Template',
  lang: 'en',
  start_url: '/',
  background_color: '#FFFFFF',
  theme_color: '#FFFFFF',
  dir: 'ltr',
  display: 'standalone',
  orientation: 'natural',
  prefer_related_applications: false,
};

export default manifest;
