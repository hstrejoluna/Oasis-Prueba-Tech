import styled from "styled-components";

const DetsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  #logo {
    width: 120px;
    height: 120px;
    z-index: 200;
    margin-top: -100px;
    margin-left: 100px;
  }

  #background {
    width: 300px;
    height: 300px;
    z-index: 10;
    margin-bottom: -100px;
  }

  .detailsdiv {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    color: black;
  }

  #ddesc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 20%;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-right: 1px solid gray;
  }
  #ddesc p {
    margin-left: 0px;
    margin-top: 0px;
    text-align: left;
  }
  #dtitle {
    font-weight: bold;
  }

  #dtime {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 30%;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export default function Dets(props) {
  return (
    <>
      {props.details.hasOwnProperty("id") && (
        <>
          <DetsDisplay>
            <img
              src={props.url_img + props.details.img_portada}
              id="background"
              alt="logo"
            />
            <img
              src={props.url_img + props.details.logo}
              id="logo"
              alt="business"
            />
            <div className="detailsdiv">
              <div id="ddesc">
                <p id="dtitle">{props.details.nombre}</p>
                <p>{props.details.concepto_en}</p>
                <p>{props.details.concepto_es}</p>
              </div>
              <div id="dtime">
                <span> ABIERTO HOY </span>
                <p>
                  {props.hours12(props.details.hora_inicio)} -
                  {props.hours12(props.details.hora_final)}
                </p>
              </div>
            </div>
          </DetsDisplay>
        </>
      )}
    </>
  );
}
