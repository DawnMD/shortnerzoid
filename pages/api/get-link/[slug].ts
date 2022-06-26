import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug'];

  console.log(req);
  if (!slug || typeof slug !== 'string') {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: 'Please use with a slug' }));

    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: 'Slug not found' }));

    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=1000000000, stale-while-revalidate');

  return res.json(data);
};
