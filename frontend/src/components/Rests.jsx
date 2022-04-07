import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurants } from "../store";

const RestsList = styled.div`
  .c {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 1px solid black;
    padding-top: 15px;
    padding-bottom: 1px;
  }
  .c #name {
    font-weight: bold;
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 5px;
  }

  .c #concept {
    color: #bf0811;
    margin-bottom: 0px;
    margin-top: 0px;
  }

  .c #isopen {
    font-weight: bold;
    margin-top: 15px;
  }

  .c #time {
    margin-top: 0px;
  }

  .innerc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .innerc .incbutton {
    background-color: white;
    color: black;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .incbutton:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .innerc .incbutton-active {
    background-color: black;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .innertimec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default function Rests() {
  const dispatch = useDispatch();
  dispatch({ type: "oasis/fetchRestaurants" });
  const restaurants = useSelector(selectRestaurants);
  console.log(restaurants);
  return (
    <>
      <>
        <RestsList></RestsList>
      </>
    </>
  );
}
