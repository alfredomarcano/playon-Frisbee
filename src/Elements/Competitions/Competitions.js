import React from "react";
import "../stylesheels/Competitions.css";

export function Competitions() {
  return (
    <div className="Competiciones">
      <div className='Compet-event'>
        <img src={require("./imagenes/Adrenalina-up.png")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/Ev.png")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/flyer-Copy.jpg")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/MD2020.jpg")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/soulgame.jpg")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/TVTUF.png")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/Voladores21.jpg")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
      <div className='Compet-event'>
        <img src={require("./imagenes/Adrenalina-up.png")} alt="" width="100%" height="100%"/>
        <div>
          <h3>Nombre del evento</h3>
        </div>
      </div>
    </div>
  );
}
