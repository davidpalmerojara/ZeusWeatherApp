export function getCurrentDay(dt: number) {
  const date = new Date(dt * 1000).toString();
  const day = date.substring(0, date.indexOf(" "));
  return day;
}

export function getCurrentHour(dt: number) {
  const date = new Date(dt * 1000);
  return date.getHours() + ":" + date.getMinutes() + "0";
}

export function getHour(dt: number) {
  const date = new Date(dt * 1000);
  return date.getHours() + ":" + date.getMinutes();
}
export function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours().toLocaleString();
  let minutes = date.getMinutes().toLocaleString();
  if (parseInt(hours) < 10) hours = "0" + hours;
  else if (parseInt(minutes) < 10) minutes = "0" + minutes;
  return hours + ":" + minutes;
}
