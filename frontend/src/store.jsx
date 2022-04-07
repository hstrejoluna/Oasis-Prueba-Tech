import { createStore } from "redux";
import { hourFormat, daynDate } from "./helpers/hour";

function oasisReducer(
  state = {
    bars: [],
    restaurants: [],
    details: {},
    iapi: true,
    daynDate: {
      day: new Date().getDay() + 1,
      date: new Date().toLocaleString("es-MX", {
        timeZone: "America/Cancun",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    },
    hour: new Date().toLocaleTimeString("es-MX", {
      timeZone: "America/Cancun",
      is12Hour: true,
      
    }),
    interval: null,
  },
  action
) {
  switch (action.type) {
    case "oasis/fetchBars":
      return async function (dispatch) {
        try {
          let response = await fetch(
            `https://oasistestbackend.herokuapp.com/data/${action.day}/3/${action.hour}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let responseJSON = await response.json();
          function dispatchBars(resp) {
            dispatch({
              type: "oasis/fetchBars",
              bars: resp,
              day: action.day,
              hour: action.hour,
            });
          }

          return dispatchBars(await responseJSON);
        } catch (error) {
          console.error("Can't get bars! Reason: " + error);
        }
      };
    case "oasis/fetchRestaurants":
      return async function (dispatch) {
        try {
          let response = await fetch(
            `https://oasistestbackend.herokuapp.com/data/${action.day}/2/${action.hour}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          let responseJSON = await response.json();
          function dispatchRestaurants(resp) {
            dispatch({
              type: "oasis/fetchRestaurants",
              restaurants: resp,
              day: action.day,
              hour: action.hour,
            });
          }

          return dispatchRestaurants(await responseJSON);
        } catch (error) {
          console.error("Can't get restaurants! Reason: " + error);
        }
      };
    case "oasis/getDayandHour":
      return function (dispatch) {
        dispatch({
          type: "oasis/getDayandHour",
          day: action.day,
          hour: action.hour,
        });
      };

    case "oasis/interval":
      return function (dispatch) {
        const intervalset = setInterval(
          () => (state.hour = hourFormat),
          60 * 1000
        );
        dispatch({
          type: "oasis/interval",
          interval: intervalset,
        });
      };

    default:
      return state;
  }
}

export const selectHour = (state) => state.hour;

export const selectDate = (state) => state.daynDate.date;

let store = createStore(oasisReducer);

store.subscribe(() => console.log(store.getState()));
export default store;
