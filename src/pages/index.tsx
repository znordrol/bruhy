/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { useWindowScroll } from 'react-use';

import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const { y } = useWindowScroll();
  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='relative' style={{ height: `calc(200vh + ${y}px)` }}>
            <h1>Kontaknya ada dibawah gan, scroll ajaa</h1>
            <p className='absolute bottom-0 select-none'>
              https://gist.github.com/LordRonz/0cfc3e0765f15ef7c9f511779ed7c63e
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
