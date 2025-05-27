import { getCurrentDay, getCurrentHour } from "../../_lib/utils";
import { DailyForecast, HourlyForecast } from "../../_lib/weatherTypes";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function WeatherCardHourly({ dt, weather, temp }: HourlyForecast) {
  return (
    <div className="flex flex-col gap-4 items-center p-12 min-w-100">
      <p>{getCurrentHour(dt)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt="Weather icon"
        className="min-w-10"
      />
      <p>{Math.round(temp)}°</p>
    </div>
  );
}

export function WeatherCardDaily({
  dt,
  weather,
  pop,
  temp,
  feels_like,
}: DailyForecast) {
  return (
    <ul className="flex items-center justify-evenly gap-x-8 p-4 m-4 w-full flex-nowrap">
       <li className="flex-nowrap"><p>{getCurrentDay(dt)}</p></li>
       <li className="flex-nowrap"><img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt="Weather icon"
        className="mt-2 min-w-10"
      /></li>
      <li className="flex-nowrap"><p>{Math.round(pop * 100)}%</p></li>
      <li className="flex-nowrap"><p>{temp.day}°</p></li>
      <li className="flex-nowrap"><div className="flex">
        {<p className="font-bold mr-2">{temp.max}º</p>}
        {<p className="text-slate-200">{temp.min}º</p>}
      </div></li>
       <li className="flex-nowrap"><p className="whitespace-nowrap">{capitalize(weather[0].description)}</p></li>
      <li className="flex-nowrap"><p className="whitespace-nowrap">Feels like {feels_like.day}º</p></li>
    </ul>
  );
}
