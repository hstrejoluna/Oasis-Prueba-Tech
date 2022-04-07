import React from "react";
import styled from "styled-components";
import Clock from "react-digital-clock";

import { useSelector, useDispatch } from "react-redux";
import { selectDate } from "../store";

const Navbar = styled.div`
  background-color: #bf0811;
  display: grid;
  justify-items: start;
  align-items: start;
  padding: 10px;

  #timeformat {
    display: grid;
    grid-template-columns: [grandoasis] auto [thing1] auto [clock] auto [col4-start] 50px [date] 40px [end];
    column-gap: 20px;
    color: white;
    font-size: 20px;
  }
  .clock {
    text-transform: uppercase;
    align-self: center;
  }

  p {
    text-transform: uppercase;
    color: white;
    font-size: 20px;
  }

  label {
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  span {
    color: white;
    font-size: 20px;
  }

  .title {
    font-weight: bold;
  }
`;

export default function NavBar() {
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  return (
    <>
      <Navbar>
        <div id="timeformat">
          <p className="title">GRAND OASIS CANCUN &ensp;| </p>
          <div className="clock">
            <Clock />
          </div>

          <p>{date}</p>
        </div>
      </Navbar>
    </>
  );
}
