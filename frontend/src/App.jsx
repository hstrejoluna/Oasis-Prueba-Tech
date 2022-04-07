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

  return (
    <AppI>
      <Nav/>
      <Rests/>
    </AppI>
  );
};

export default App;
