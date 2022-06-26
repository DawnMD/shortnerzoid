import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname === '/' ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.includes('/favicon.ico')
  ) {
    return;
  }

  const slug = req.nextUrl.pathname.split('/').pop();

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-link/${slug}`);

  if (slugFetch.status === 404) {
    return NextResponse.rewrite(req.nextUrl.origin);
  }
  const data = await slugFetch.json();

  if (data?.url) {
    return NextResponse.rewrite(data.url);
  }
}
