export type WeatherData = {
  current: {
    name?: string;
    temp: number;
    minTemp: number;
    maxTemp: number;
    description: string;
    icon: string;
    feelsLike: number;
  };
  daily: {
    date: string;
    minTemp: number;
    maxTemp: number;
    description: string;
    icon: string;
    pop: number;
  }[];
  hourly: {
    date: string;
    temp: number;
    icon: string;
  }[];
};

export type City = {
  name: string;
  lat: number;
  lon: number;
  state: string;
  country: string;
};

export type CityData = {
  name: string;
  lat: number;
  lon: number;
  state: string;
  country: string;
}[];

export type HeaderProps = {
  name: string;
  temp?: number;
  minTemp: number;
  maxTemp: number;
  description?: string;
  icon: string;
  feelsLike?: number;
};
