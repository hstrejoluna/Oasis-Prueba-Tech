import styled from "styled-components";

const BarList = styled.div`
  .c {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 1px solid black;
    padding-top: 15px;
    padding-bottom: 1px;
  }

  .inc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .inc .incbutton-bar {
    background-color: transparent;
    color: white;
    border-color: white;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }

  .incbutton-bar:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  .inc .incbutton-active-bar {
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

  .intimec {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .column-result {
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

  .c #name {
    font-weight: bold;
    font-size: 18px;
    margin-top: 0px;
    margin-bottom: 5px;
  }

  .c #isopen {
    font-weight: bold;
    margin-top: 15px;
  }

  .c #time {
    margin-top: 0px;
  }
`;

export default function Bars(props) {
  return (
    <>
      {props.bars && (
        <>
          {props.bars.map((bar, ind) => (
            <BarList key={ind}>
              <div className="c" key={ind}>
                <h5 id="name">{bar.nombre}</h5>
                <div className="inc">
                  <div>
                    {" "}
                    <p id="isopen"> ABIERTO HOY </p>
                    <p id="time">
                      {" "}
                      {props.hours12(bar.hora_inicio)} -
                      {props.hours12(bar.hora_final)}
                    </p>{" "}
                  </div>

                  <button
                    className="incbutton-bar"
                    data-id={bar.id}
                    onClick={props.handleChange}
                  >
                    VER MÁS
                  </button>
                </div>
              </div>
            </BarList>
          ))}
        </>
      )}
    </>
  );
}
