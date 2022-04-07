import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Dets from "./components/Dets";
import Rests from "./components/Rests";
import Bars from "./components/Bars";
import { hourFormat, hours12 } from "./helpers/hour";
import styled from "styled-components";

const AppI = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    gap: 10px;
    background-color: transparent;
    overflow: hidden;
  }

  .column {
    flex: 1;
    text-align: center;
    border: 1px solid black;
    background-color: white;
    height: 90vh;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
  }

  .column-bar {
    flex: 1;
    text-align: center;
    color: white;
    border: 1px solid white;
    background-color: rgb(66, 66, 66);
    height: 90vh;
    overflow: scroll;
    scroll-behavior: smooth;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
  }

  .coltitle {
    margin-top: 0px;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const App = () => {

  const url_img = "https://api-onow.oasishoteles.net/";
  useEffect(() => {
    async function getData(day, endpoint, hour) {
      const res = await fetch(
        `https://oasistestbackend.herokuapp.com/data/${day}/${endpoint}/${hour}`
      );
      const data = await res.json();
      if (endpoint === 2) {
        setRestaurants(data);
      }
      if (endpoint === 3) {
        setBars(data);
      }
    }
    if (iapi) {
      setIiapi(false);
      getData(daynDate.day, 2, hour);
      getData(daynDate.day, 3, hour);
    }
    return () => {
      clearInterval(interval);
    };
  }, [daynDate.day, hour]);

  const handleChange = (e) => {
    e.preventDefault();
    let idcent = parseInt(e.target.getAttribute("data-id"));
    setDetails(bars.concat(restaurants).filter((e) => e.id === idcent)[0]);
  };

  return (
    <AppI>
      <Nav hours12={hours12} hour={hour} date={daynDate.date} />
      <section className="container">
        <div className="column">
          <h1 className="coltitle">Restaurantes</h1>
          <div>
            <Rests
              restaurants={restaurants}
              hours12={hours12}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="column-bar">
          <h1 className="coltitle">Bares</h1>
          <div>
            <Bars bars={bars} hours12={hours12} handleChange={handleChange} />
          </div>
        </div>
        <div className="column-result">
          <Dets hours12={hours12} url_img={url_img} details={details} />
        </div>
      </section>
    </AppI>
  );
};

export default App;
