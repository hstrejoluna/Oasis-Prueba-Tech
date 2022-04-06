import { useState } from "react";

export const hourFormat = () => {
  return new Date().toLocaleTimeString("es-MX", {
    timeZone: "America/Cancun",
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

// Changer format from "hh:mm:ss" to "hh:mm AM/PM"
export const hours12 = (hr) => {
  return (
    (parseInt(hr.split(":")[0]) >= 12
      ? parseInt(hr.split(":")[0]) % 12
      : hr.split(":")[0]) +
    ":" +
    hr.split(":")[1] +
    " " +
    (parseInt(hr.split(":")[0]) >= 12 ? "PM" : "AM")
  );
};
