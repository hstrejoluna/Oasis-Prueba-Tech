import styled from "styled-components";

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

export default function Rests(props) {
  return (
    <>
      {props.restaurants && (
        <>
          {props.restaurants.map((res, ind) => (
            <RestsList key={ind}>
              <div className="c" id={res.id} key={ind}>
                <h5 id="name">{res.nombre}</h5>
                <p id="concept">{res.concepto_en}</p>
                <p id="concept">{res.concepto_es}</p>
                <div className="innerc">
                  <div className="innertimec">
                    <span id="isopen"> ABIERTO HOY </span>
                    <p id="time">
                      {" "}
                      {props.hours12(res.hora_inicio)} -
                      {props.hours12(res.hora_final)}
                    </p>
                  </div>
                  <button
                    className="incbutton"
                    data-id={res.id}
                    onClick={props.handleChange}
                  >
                    VER MÁS
                  </button>
                </div>
              </div>
            </RestsList>
          ))}
        </>
      )}
    </>
  );
}
