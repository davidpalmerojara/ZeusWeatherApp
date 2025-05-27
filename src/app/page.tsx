'use client';

import Search from '@/app/_components/Search';
import { Suspense } from 'react';
console.log(process.env.API_KEY);
export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find weather around you
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse the weather{' '}
        <span className="font-bold underline text-orange-500 opacity-100 italic">
          anywhere
        </span>{' '}
        in the world
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
    </main>
  );
}
