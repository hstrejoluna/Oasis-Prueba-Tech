import React from "react";
import styled from "styled-components";
import Clock from "react-digital-clock";
import { useState, useEffect } from "react";

const Navbar = styled.div`
  background-color: #bf0811;
  display: grid;
  justify-items: start;
  align-items: start;
  padding: 10px;

  #timeformat {
    display: grid;
    grid-template-columns: [grandoasis] auto [thing1] auto [clock] auto [col4-start] 50px [date] 40px [select] 40px [end];
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

  .selectHotels {
    width: 200px;
  }
`;

export default function NavBar(props) {
  const [hotels, setHotels] = useState([]);


  useEffect(() => {
    getHotels();
    async function getHotels() {
      const res = await fetch(`http://localhost:5000/hotels`);
      const data = await res.json();
      setHotels(data);
    }
  }, []);

 

  return (
    <>
      <Navbar>
        <div id="timeformat">
          <p className="title">GRAND OASIS CANCUN &ensp;| </p>
          <div className="clock">
            <Clock />
          </div>
          <p>{props.date}</p>
          <select className="selectHotels" onChange={props.handleHotel}>
            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.nombre}
              </option>
            ))}
          </select>
        </div>
      </Navbar>
    </>
  );
}
