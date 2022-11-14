export function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function ubuntuDateString() {
  const date = new Date();

  const calenderDate = Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date());

  return `${calenderDate} ${date.getUTCHours()}:${date.getUTCMinutes()}:${
    date.getUTCSeconds() < 10 ? `0${date.getUTCSeconds()}` : date.getUTCSeconds()
  } UTC ${date.getUTCFullYear()}`.replace(",", "");
}
