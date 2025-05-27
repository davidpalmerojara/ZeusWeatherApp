'use server';

const apiKey = process.env.API_KEY;

export async function getWeather(lat: number | null, lon: number | null) {
  const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';

  const response = await fetch(
    `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&exclude={hourly, daily}&appid=${apiKey}`
  );
  if (!response.ok) {
    return {
      message: 'API Error: Failed to fetch results.',
    };
  }

  const data = await response.json();

  return data;
}

export async function getCity(lat: string, lon: string) {
  const BASE_URL = 'http://api.openweathermap.org/geo/1.0/reverse';
  const response = await fetch(
    `${BASE_URL}?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
  );
  if (!response.ok) {
    return {
      message: 'API Error: Failed to fetch results.',
    };
  }

  const data = await response.json();
  console.log(data);

  return data;
}

export async function getCityList(city: string) {
  const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';
  const response = await fetch(`${BASE_URL}?q=${city}&limit=5&appid=${apiKey}`);
  if (!response.ok) {
    return {
      message: 'API Error: Failed to fetch results.',
    };
  }

  const data = await response.json();

  return data;
}
