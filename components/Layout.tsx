import { ReactNode } from 'react';
import NextLink from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen px-8 bg-zinc-900'>
      <header className='flex items-center justify-between py-4 text-zinc-100'>
        <div className='text-2xl font-bold tracking-tight'>
          <NextLink href='/'>Shortnerzoid</NextLink>
        </div>
        <a
          href='https://github.com/DawnMD/shortnerzoid'
          target='_blank'
          rel='noopener noreferrer'>
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 transition duration-200 text-zinc-100 hover:text-zinc-400'>
            <title>GitHub</title>
            <path
              fill='currentColor'
              d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
            />
          </svg>
        </a>
      </header>
      <main className='grid place-items-center grow'>{children}</main>
      <footer className='flex flex-col items-center gap-2 py-4 md:flex-row md:gap-0 md:justify-between'>
        <p className='text-zinc-100'>
          Built by{' '}
          <a
            href='https://github.com/DawnMD'
            target='_blank'
            rel='noopener noreferrer'
            className='text-lg font-semibold tracking-wide transition duration-200 hover:text-zinc-400'>
            Mainak Das
          </a>
        </p>
        <div className='flex items-center gap-4'>
          <a
            href='https://vercel.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 transition duration-200 text-zinc-100 hover:text-zinc-400'>
              <title>Vercel</title>
              <path d='M24 22.525H0l12-21.05 12 21.05z' fill='currentColor' />
            </svg>
          </a>
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 transition duration-200 text-zinc-100 hover:text-zinc-400'>
              <title>Next.js</title>
              <path
                fill='currentColor'
                d='M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z'
              />
            </svg>
          </a>
          <a
            href='https://www.prisma.io/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 transition duration-200 text-zinc-100 hover:text-zinc-400'>
              <title>Prisma</title>
              <path
                fill='currentColor'
                d='M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z'
              />
            </svg>
          </a>
          <a
            href='https://planetscale.com/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              role='img'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 transition duration-200 text-zinc-100 hover:text-zinc-400'>
              <title>PlanetScale</title>
              <path
                fill='currentColor'
                d='M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z'
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};
