import { WeatherResponse } from '@/app/_lib/weatherTypes';
import { getWeather } from '@/app/_lib/actions';
import Header from '@/app/location/_components/Header';
import {
  WeatherContainerDaily,
  WeatherContainerHourly,
} from '@/app/location/_components/WeatherContainer';
import { getHour } from '../_lib/utils';
import {
  WiSunset,
  WiWindy,
  WiDirectionUp,
  WiThermometer,
  WiRaindrop,
} from 'react-icons/wi';
import RainCanvas from '../_components/RainCanvas';
import Clouds from '../_components/Clouds';
import GradientBackground from '../_components/GradientBackground';
import BodyGradientManager from '../_components/BodyGradientManager';

export default async function WeatherPage(props: {
  searchParams?: Promise<{
    q?: string;
    lat?: string;
    lon?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const name = searchParams?.q || '';
  const lat = Number(searchParams?.lat) || null;
  const lon = Number(searchParams?.lon) || null;

  const data: WeatherResponse = await getWeather(lat, lon);
  data.current.name = name;

  const weatherMain = data.current.weather?.[0]?.main?.toLowerCase() || '';
  let isRaining = ['rain', 'drizzle', 'thunderstorm'].some((condition) =>
    weatherMain.includes(condition)
  );

  let isCloudy = ['clouds', 'cloudy'].some((condition) =>
    weatherMain.includes(condition)
  );

  const localHour = new Date(
    (data.current.dt + data.timezone_offset) * 1000
  ).getUTCHours();

  return (
    <>
      {isRaining && <RainCanvas />}
      {isCloudy && <Clouds />}
      <BodyGradientManager hour={localHour} />
      <main className="flex-col">
        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-2 gap-4">
          <Header {...data} />
          <WeatherContainerDaily {...data} />
          <WeatherContainerHourly {...data} />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 h-[calc(100vh-3.5rem)] mt-4 mx-4">
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">UV</h3>
            <p className="text-white font-bold text-2xl px-4">
              {data.current.uvi}
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[4rem] font-bold size-24 lg:size-24 flex items-center justify-center text-6xl">
                <p>{Math.round(data.current.uvi)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">Humidity</h3>
            <p className="text-white font-bold text-2xl px-4">
              {data.current.humidity}%
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[8rem] font-bold size-24 lg:size-24 flex items-center justify-center">
                <WiRaindrop />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">Feels like</h3>
            <p className="text-white font-bold text-2xl px-4">
              {data.current.feels_like}º
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[8rem] size-24 lg:size-24 flex items-center justify-center">
                <WiThermometer />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">Pressure</h3>
            <p className="text-white font-bold text-2xl px-4">
              {data.current.pressure}
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[8rem] font-bold size-24 lg:size-24 flex items-center justify-center">
                <WiDirectionUp />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">Sunset</h3>
            <p className="text-white font-bold text-2xl px-4">
              {getHour(data.current.sunset)}
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[8rem] size-24 lg:size-24 flex items-center justify-center">
                <WiSunset />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white/30 text-white rounded-2xl p-4">
            <h3 className="text-xl text-slate-200 p-4">Wind</h3>
            <p className="text-white font-bold text-2xl px-4">
              {data.current.wind_speed}
            </p>
            <div className="flex-1 flex justify-end items-end p-4">
              <div className="text-white text-[8rem] font-bold size-24 lg:size-24 flex items-center justify-center">
                <WiWindy />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
