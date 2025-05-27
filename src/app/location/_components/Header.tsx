import { getCurrentTime } from "@/app/_lib/utils";
import { WeatherResponse } from "@/app/_lib/weatherTypes";

export default function Header(data: WeatherResponse) {
  const updatedTime = getCurrentTime();
  const name = data.current.name;
  const temp = Math.round(data.current.temp);
  const min = Math.round(data.daily[0].temp.min);
  const max = Math.round(data.daily[0].temp.max);
  const description = data.current.weather[0].description;
  const icon = data.current.weather[0].icon;
  const feelsLike = data.current.feels_like;

  return (
    <div className="flex md:justify-self-center flex-col md:col-span-2 justify-around items-start gap-2 m-4 p-4 max-h-80 h-80">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p>Updated at {updatedTime}</p>
      <div className="flex">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="Weather icon"
          className="object-cover"
        />
        {temp && <p className="text-6xl"> {temp}°</p>}
      </div>
      <div className="flex justify-center gap-x-2">
        <p className="font-bold text-2xl">{max}º</p>
        <p className="text-2xl text-slate-200">|</p>
        <p className="text-2xl text-slate-400">{min}º</p>
      </div>
      {description && (
        <h2 className="text-xl font-bold">
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </h2>
      )}
      {feelsLike && (
        <p className="mr-2 font-bold">Feels like {Math.round(feelsLike)}º</p>
      )}
    </div>
  );
}
