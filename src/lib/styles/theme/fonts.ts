import { Figtree as FontBody } from 'next/font/google';

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
});

export const fonts = {
  heading: { value: fontBody.style.fontFamily },
  body: { value: fontBody.style.fontFamily },
};
