export const hourFormat = () => {
  return new Date().toLocaleTimeString("es-MX", {
    timeZone: "America/Cancun",
    is12Hour: true,
  });
};

export const daynDate = {
  day: new Date().getDay() + 1,
  date: new Date().toLocaleString("es-MX", {
    timeZone: "America/Cancun",
    day: "numeric",
    month: "long",
    year: "numeric",
  }),
};

