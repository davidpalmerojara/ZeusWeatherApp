'use client';

import { useState, useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { CityData } from '@/app/_lib/definitions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { geoLocate, handleSearch } from '@/app/_lib/searchUtils';
import PopularCities from '@/app/_lib/ui/PopularCities';
import { FaSearchLocation } from 'react-icons/fa';

export default function Search() {
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [cityList, setCityList] = useState<CityData | null>(null);
  const ref = useRef<HTMLFormElement>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent): void => {
      if (!ref.current?.contains(e.target as Node)) {
        setError(null);
        setSearchValue('');
        setCityList(null);
      }
    };

    window.addEventListener('mousedown', handleOutSideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutSideClick);
    };
  }, []);

  const handleSearchDebounced = useDebouncedCallback(() => {
    handleSearch(searchValue, setCityList, setError);
  }, 200);

  const handleChange = (value: string) => {
    setSearchValue(value);
    handleSearchDebounced();
  };

  return (
    <form
      ref={ref}
      onSubmit={(e) => e.preventDefault()} // Evita submit al presionar Enter
      className="items-center justify-center mb-4 flex flex-col w-400 sm:w-[400px] m-auto relative"
      aria-label="Search for a city">
      <PopularCities />
      <div className="flex w-full">
        <label htmlFor="city-search" className="sr-only">
          Enter city name
        </label>
        <input
          id="city-search"
          type="text"
          value={searchValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter city name"
          className="outline-none border p-2 w-full rounded text-lg bg-white/90 text-slate-500 ring-amber-600/50 transition focus:ring-2 focus:bg-white/80"
          aria-required="true"
        />
        <button
          type="button"
          onClick={() => geoLocate(searchParams, push, pathname, setError)}
          className="bg-white/90 text-slate-500 px-4 mx-4 rounded whitespace-nowrap"
          aria-label="Use current location">
          <FaSearchLocation />
        </button>
      </div>

      {cityList && (
        <ul className="flex flex-col absolute transition-all w-full rounded border-white bg-white/90 items-start top-24 z-10">
          {cityList.map((city) => (
            <li
              key={`/location?q=${city.name}&lat=${city.lat}&lon=${city.lon}`}
              className="p-2 text-slate-500 hover:text-blue-500 w-full text-left">
              <button
                type="button"
                onClick={() => {
                  const url = `/location?q=${encodeURIComponent(
                    city.name
                  )}&lat=${city.lat}&lon=${city.lon}`;
                  push(url);
                  setSearchValue('');
                  setCityList(null);
                  setError(null);
                }}>
                {city.name}
                {city.state && `, ${city.state}`}
                {city.country && `, ${city.country}`}
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && (
        <div className="flex flex-col absolute transition-all w-full rounded border-white bg-white/90 items-start top-24 z-10">
          <p className="text-slate-500 p-2">{error}</p>
        </div>
      )}
    </form>
  );
}
