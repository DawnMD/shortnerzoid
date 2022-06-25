import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../utils/db';
import { nanoid } from 'nanoid';

type ResponseData = {
  slug?: string;
  message?: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const slug = req.body['slug'];
  const url = req.body['url'];

  if (!url || typeof url !== 'string') {
    res.statusCode = 404;

    res.json({ message: 'Please use with a URL' });

    return;
  }

  const hash = slug ? slug : nanoid();

  const existsUrl = await prisma.shortLink.findFirst({
    where: {
      url: {
        equals: url,
      },
    },
  });

  if (existsUrl) {
    return res.json({ slug: existsUrl.slug });
  }

  const existSlug = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: hash,
      },
    },
  });

  if (existSlug) {
    return res.json({ message: 'Slug already exists, please use another' });
  }

  await prisma.shortLink.create({
    data: {
      slug: hash,
      url: url,
    },
  });

  res.send({ slug: hash });
};
