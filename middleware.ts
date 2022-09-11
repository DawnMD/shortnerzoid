import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname);
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/favicon.ico') ||
    req.nextUrl.pathname === '/' ||
    req.nextUrl.pathname.startsWith('/api')
  ) {
    return;
  }

  const slug = req.nextUrl.pathname.split('/').pop();

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-link/${slug}`);

  if (slugFetch.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin);
  }
  const data = await slugFetch.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}
