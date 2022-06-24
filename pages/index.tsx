import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type UrlInput = {
  url: string;
};

const schema = yup
  .object({
    url: yup
      .string()
      .url('Must be a valid URL')
      .required('Enter an URL to shorten'),
  })
  .required();

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UrlInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UrlInput> = (data) => console.log(data);

  return (
    <div>
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
          <div className='relative group'>
            <div className='animate-tilt absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
            <button className='relative w-full px-16 py-2 font-semibold tracking-wide text-pink-600 transition duration-1000 rounded-lg bg-zinc-900 group-hover:duration-200 group-hover:text-purple-600'>
              Short It!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
