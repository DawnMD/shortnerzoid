import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import create from '../api/create';
import { getBaseUrl } from '../utils/getbaseUrl';

type UrlInput = {
  url: string;
  slug?: string;
};

const schema = yup
  .object({
    url: yup
      .string()
      .url('Must be a valid URL')
      .required('Enter an URL to shorten'),
    slug: yup.string().optional(),
  })
  .required();

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState('');
  const [copy, setCopy] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UrlInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UrlInput> = async ({ url, slug }) => {
    setLoading(true);

    const { data } = await create.post('/', { url, slug });

    const fullSlug = `${getBaseUrl()}/${data.slug}`;

    setSlug(fullSlug);
    reset();
    setLoading(false);
  };

  const onCopyClipboard = () => {
    navigator.clipboard.writeText(slug);
    setCopy(true);
  };

  const goBack = () => {
    setSlug('');
  };

  useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => {
        setCopy(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [copy]);

  return (
    <div>
      {slug === '' ? (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
          <p className='text-red-400'>{errors.url?.message}</p>
          <div className='flex flex-col gap-8 md:flex-row md:items-center'>
            <section>
              <input
                type='text'
                {...register('url')}
                placeholder='Enter Url'
                className='rounded-lg group focus:ring-0 focus:outline-none focus:border-0 w-80 lg:w-96'
              />
            </section>
            <section>
              <input
                type='text'
                {...register('slug')}
                placeholder='Keep empty to autogenerate short title'
                className='rounded-lg group focus:ring-0 focus:outline-none focus:border-0 w-80 lg:w-96'
              />
            </section>
            <div className='relative group'>
              <div className='animate-tilt absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
              <button className='relative flex items-center justify-center w-full gap-4 px-16 py-2 font-semibold tracking-wide text-pink-600 transition duration-1000 rounded-lg bg-zinc-900 group-hover:duration-200 group-hover:text-purple-600'>
                {loading && (
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-6 h-6 animate-spin'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                      />
                    </svg>
                  </span>
                )}
                <span>Short It!</span>
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-60'></div>
            <div className='relative max-w-xs px-4 py-2 overflow-x-auto text-xl rounded-lg text-zinc-100 bg-zinc-900 md:max-w-none'>
              {slug}
            </div>
          </div>
          <div className='flex flex-col divide-y-2 divide-zinc-100 divide-opacity-40 md:divide-y-0 md:divide-x-2 md:flex-row'>
            <button
              className={`flex items-center justify-center gap-4 pb-4 md:pb-0 md:pr-4 ${
                copy ? 'text-purple-600' : 'text-pink-600'
              }`}
              onClick={onCopyClipboard}>
              {copy ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                  />
                </svg>
              )}
              <span className='text-lg font-medium'>
                {copy ? 'Copied' : 'Copy to Clipboard'}
              </span>
            </button>
            <button
              onClick={goBack}
              className='pt-4 text-lg font-medium text-zinc-100 md:pt-0 md:pl-4'>
              Create another
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
