import React from "react";
import "../stylesheels/Champions.css";
import champions from "./Champions.json";
import dateFormat from "dateformat";

export function Champions() {
  return (
    <div className="Champions">
      <h1>Partidos</h1>
      <div className="row">
        {champions.map(Listchamp => (
          <div className="champs-items" key={Listchamp.id}>
            <ul className="online">
              <li className="online-icon">&#x25B6;</li>
              <li className="online-text">On line</li>
            </ul>
            <section className="items-title">
              <article>
                <span>{dateFormat(Listchamp.date_event, "ddd, m/d h:MM TT")}</span>
              </article>
              <article>
                <span>{Listchamp.status}</span>
              </article>
            </section>
            <section className="items-team1">
              <article className="items-team">
                <img src={require('../../../public/imagenes/'+ Listchamp.logo_team_one)} alt="" />
                <span>{Listchamp.name_team_one}</span>
              </article>
              <article>
                <span>0 Ptos</span>
              </article>
            </section>
            <section className="items-team2">
              <article className="items-team">
                <img src={require("../../../public/imagenes/"+ Listchamp.logo_team_two)} alt="" />
                <span>{Listchamp.name_team_two}</span>
              </article>
              <article>
                <span>0 Ptos</span>
              </article>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
