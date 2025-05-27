import Link from 'next/link';

const PopularCities = () => (
  <section className="mb-4 flex gap-x-4 text-white-50 text-sm w-full items-center">
    <p>Popular:</p>
    <div className="space-x-2 font-semibold">
      <Link href="/location?q=Madrid&lat=40.4168&lon=-3.7038">Madrid</Link>
      <Link href="/location?q=Barcelona&lat=41.3874&lon=2.1686">Barcelona</Link>
    </div>
  </section>
);

export default PopularCities;
