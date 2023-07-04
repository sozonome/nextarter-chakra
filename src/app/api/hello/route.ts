// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ name: 'John Doe' }, { status: 200 });
};
