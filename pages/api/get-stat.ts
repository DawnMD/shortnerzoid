import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../utils/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.shortLink.count();

  if (!data) {
    return res.json({ total: 0 });
  }

  return res.json({ total: data });
}
