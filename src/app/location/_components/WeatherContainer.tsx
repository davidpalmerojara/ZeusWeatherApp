import { WeatherResponse } from '@/app/_lib/weatherTypes';
import { WeatherCardDaily, WeatherCardHourly } from './WeatherCards';

export function WeatherContainerDaily(data: WeatherResponse) {
  return (
    <div className="rounded-2xl mx-4 md:mt-4 bg-white/5 md:col-span-3 flex flex-col overflow-scroll max-h-[300px] lg:max-h-80">
      <h3 className="text-2xl font-bold pr-4 p-4">Daily forecast</h3>
      <div className="flex flex-col overflow-scroll align-center flex-grow items-between gap-4 w-full">
        {data.daily.map((day, index) => (
          <WeatherCardDaily key={index} {...day} />
        ))}
      </div>
    </div>
  );
}

export function WeatherContainerHourly(data: WeatherResponse) {
  return (
    <div className="rounded-2xl mx-4 bg-white/20 md:col-span-5 w-100 row-start-2">
      <h3 className="text-2xl font-bold pr-4 p-4">Hourly forecast</h3>
      <div className="flex overflow-scroll p-4">
        {data.hourly.map((hour, index) => (
          <WeatherCardHourly key={index} {...hour} />
        ))}
      </div>
    </div>
  );
}
