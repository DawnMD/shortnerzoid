import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest, res: NextResponse) {
  if (
    req.nextUrl.pathname === '/' ||
    req.nextUrl.pathname.startsWith('/api/') ||
    req.nextUrl.pathname.includes('/favicon.ico')
  ) {
    return;
  }

  const slug = req.nextUrl.pathname.split('/').pop();

  console.log(slug);

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-link/${slug}`);

  console.log(slugFetch);

  if (slugFetch.status === 404) {
    return NextResponse.redirect(req.nextUrl.origin);
  }
  const data = await slugFetch.json();

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}
