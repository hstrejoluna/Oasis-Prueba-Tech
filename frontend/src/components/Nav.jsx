import React from "react";
import styled from "styled-components";


const Navbar = styled.div`
  background-color: #bf0811;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  #timeformat {
    display: flex;
    color: white;
    font-size: 20px;
  }

  p {
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  label {
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  span {
    color: white;
    font-size: 20px;
    padding: 10px;
  }

  .title {
    font-weight: bold;
  }
`;

export default function NavBar() {
  return (
    <>
      <Navbar>
        <div id="timeformat">
          <p className="title">GRAND OASIS CANCUN &ensp;| </p>
          <p>{props.hours12(props.hour)}</p>
          <p>{props.date}</p>
        </div>
      </Navbar>
    </>
  );
}
