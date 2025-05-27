import { getCity, getCityList } from "./actions";
import { City, CityData } from "./definitions";

export const geoLocate = async (
  searchParams: URLSearchParams,
  push: (url: string) => void,
  pathname: string,
  setError: (error: string | null) => void
) => {
  const params = new URLSearchParams(searchParams);

  if (!navigator.geolocation) {
    setError("Geolocation is not supported by this browser.");
    return;
  }

  setError(null);

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lon = position.coords.longitude.toString();
      const lat = position.coords.latitude.toString();

      try {
        const data = await getCity(lat, lon);
        if (data[0]?.name) {
          params.set("q", data[0].name);
          params.set("lat", lat);
          params.set("lon", lon);
        } else {
          params.delete("q");
          params.delete("lat");
          params.delete("lon");
        }
        push(`${pathname}location?${params.toString()}`);
      } catch (error) {
        setError("Failed to fetch city data.");
        console.error(error);
      }
    },
    (error) => {
      setError("Failed to retrieve your location.");
      console.error(error);
    }
  );
};

export const handleSearch = async (
  searchValue: string,
  setCityList: (data: CityData | null) => void,
  setError: (error: string | null) => void
) => {
  const data = await getCityList(searchValue);

  if (data.length > 0) {
    setCityList(data);
    setError(null);
  } else {
    setCityList(null);
    setError("No results found");
  }
};

export const handleSubmit = (
  e: React.FormEvent,
  city: City | null,
  searchParams: URLSearchParams,
  push: (url: string) => void,
  pathname: string
) => {
  e.preventDefault();
  const params = new URLSearchParams(searchParams);
  if (city) {
    params.set("q", city.name);
    params.set("lat", city.lat.toString());
    params.set("lon", city.lon.toString());
  } else {
    params.delete("q");
    params.delete("lat");
    params.delete("lon");
  }
  push(`${pathname}location?${params.toString()}`);
};
