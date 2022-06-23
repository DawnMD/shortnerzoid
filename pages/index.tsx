import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='grid min-h-screen bg-slate-900 place-content-center'>
      <form>
        <section>
          <input
            type='text'
            name='url'
            id='url'
            placeholder='Enter Url'
            className='rounded'
          />
        </section>
      </form>
    </div>
  );
};

export default Home;
